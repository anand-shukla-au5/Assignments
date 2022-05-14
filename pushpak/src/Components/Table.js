import React from 'react'
import BTable from 'react-bootstrap/Table'
import { useTable, usePagination } from 'react-table'
function Table({
    columns,
    data,
    fetchData,
    loading,
    pageCount: controlledPageCount,
}) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        // Get the state from the instance
        state: { pageIndex, pageSize },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 }, // Pass our hoisted table state
            manualPagination: true, // Tell the usePagination
            // hook that we'll handle our own data fetching
            // This means we'll also have to provide our own
            // pageCount.
            pageCount: controlledPageCount,
        },
        usePagination
    )

    // Listen for changes in pagination and use the state to fetch our new data
    React.useEffect(() => {
        fetchData({ pageIndex, pageSize })
    }, [fetchData, pageIndex, pageSize])

    // Render the UI for your table
    return (
        <>
            <BTable striped bordered hover size="md"  {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? ' 🔽'
                                                : ' 🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, i) => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })}
                            </tr>
                        )
                    })}
                    <tr>
                        {loading ? (
                            // Use our custom loading state to show a loading indicator
                            <td colSpan="10000">Loading...</td>
                        ) : (
                            <td colSpan="10000">
                                Showing {page.length} of ~{controlledPageCount * pageSize}{' '}
                                results
                            </td>
                        )}
                    </tr>
                </tbody>
            </BTable>
            {/* 
          Pagination can be built however you'd like. 
          This is just a very basic UI implementation:
        */}
            <div className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                </button>{' '}
                <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                <span>
                    | Go to page:{' '}
                    <input
                        type="number"
                        defaultValue={pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                        style={{ width: '100px' }}
                    />
                </span>{' '}
                <select
                    value={pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
        </>
    )
}

// Let's simulate a large dataset on the server (outside of our component)
// const serverData = makeData(10000)

function Tableapp({ tabledata, pageData, fetchorderList }) {
    const columns = React.useMemo(
        () => Object.keys(tabledata[0]).map(el => {
            return { Header: el.toUpperCase(), accessor: el }
        }),
        [tabledata]
    )
    // We'll start our table without any data
    const [data, setData] = React.useState(tabledata)
    const [loading, setLoading] = React.useState(false)
    const [pageCount, setPageCount] = React.useState(Math.ceil(pageData.totalRecords / pageData.limit))
    const fetchIdRef = React.useRef(0)

    const fetchData = React.useCallback(
        ({ pageSize, pageIndex }) => {
            // console.log("fetchData is being called")
            // This will get called when the table needs new data
            // You could fetch your data from literally anywhere,
            // even a server. But for this example, we'll just fake it.
            // Give this fetch an ID
            const fetchId = ++fetchIdRef.current
            setLoading(true)
            if (fetchId === fetchIdRef.current) {
                fetchorderList(pageIndex, pageSize).then((res) => {
                    setData(res.data)
                    // Your server could send back total page count.
                    // For now we'll just fake it, too
                    setPageCount(Math.ceil(res.pagination.totalRecords / res.pagination.limit))

                    setLoading(false)
                })
            }
        },
        [fetchorderList]
    )

    return (
        <Table
            columns={columns}
            data={data}
            fetchData={fetchData}
            loading={loading}
            pageCount={pageCount}
        />
    )
}

export default Tableapp


