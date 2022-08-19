// Q3. Write a program to check if two strings are a rotation of each other?



function areRotations()
{
    return (str1.length == str2.length) &&
           ((str1 + str1).indexOf(str2) != -1);
}

    var str1 = "jay";
    var str2 = "jay";

    if (areRotations())
       console.log("Strings are rotations");
    else
       console.log("Strings are not rotations");