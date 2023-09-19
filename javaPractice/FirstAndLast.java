import java.lang.*;
import java.util.*;

public class Main {
    public static void main(String[] args) {
        // YOUR CODE GOES HERE
        // Please take input and print output to standard input/output (stdin/stdout)
        // DO NOT USE ARGUMENTS FOR INPUTS
        // E.g. 'Scanner' for input & 'System.out' for output
        Scanner scn = new Scanner(System.in);
        
            int n = scn.nextInt();
            System.out.print(n%10);
            while( n >= 10 ){
                n = n / 10 ; 
            }
            System.out.print(" "+ n%10 );
            System.out.println("");
        
    }
}