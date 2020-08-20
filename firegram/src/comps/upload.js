import React, { useState } from "react"
import { projectStorage } from '../config'
export default () => {
    const [upload, setFile] = useState("")
    const [percent, setPercent] = useState("")
    const [url, setUrl] = useState("")
    const handleUpload = (e) => {
        let file = e.target.files[0]
        if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
            console.group(file)
            setFile(file)
            let refer = projectStorage.ref(`firegram/${file.name}`)
            refer.put(file).on('state_changed',
                (sanp) => {
                    let percetile = (sanp.bytesTranferred / sanp.totalBytes) * 100;
                    setPercent(percetile)
                }, (err) => {
                    console.log(err)
                }, () => {
                    setUrl(refer.getDownloadURL())
                })
        }
        else {
            alert("Incorect File Type ")
            setFile()
        }
    }
    return (
        <div>
            <form>
                <input type="file" id="#upload" onChange={handleUpload} />
                <p>{percent}</p>
            </form>
        </div>
    )
}