// Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.



function towerOfHanoi(n, s1,  s2,  s3)

{

        if (n == 0)

        {

            return;
        }

        towerOfHanoi(n - 1, s1, s3, s2);

        document.write( n + " " + s1 + " to " + s2);

        towerOfHanoi(n - 1, s3, s2, s1);

    }

    var n = 4; 
    towerOfHanoi(2, 'A', 'C', 'B'); 
