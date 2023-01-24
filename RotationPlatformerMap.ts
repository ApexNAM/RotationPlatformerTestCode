function PrintArray(arr : string[], gName : string)
{
    console.log(gName , arr);
}


let arr1 : string[] = [" ", " ", " ", "P", " ", " ", " "];
let arr2 : string[] = [" ", " ", " ", " ", "H", " ", " "];

let isForward : boolean = true;
let locationPlayerArr1 : number = 0;
let locationPlayerArr2 : number = 0;

function Movement()
{
    if (isForward)
    {
        for (let i = 0; i < arr1.length; i++)
        {
            if (arr1[i] == "P")
            {
                locationPlayerArr1 = i;
            }
        }

        if (locationPlayerArr1 == 6)
        {
            locationPlayerArr2 = arr2.length - 1;

            arr1[locationPlayerArr1] = " ";
            arr2[locationPlayerArr2] = "P";

            isForward = false;
        }
        else 
        {
            arr1[locationPlayerArr1] = " ";
            locationPlayerArr1++;
            arr1[locationPlayerArr1] = "P";
        }
    }
    else
    {
        for (let i = 0; i < arr2.length; i++)
        {
            if (arr2[i] == "P")
            {
                locationPlayerArr2 = i;
            }
            else if (arr2[i] == "H")
            {
                arr2[i] = "H";
            }
        }

        if (locationPlayerArr2 == 0)
        {
            locationPlayerArr1 = 0;

            arr2[locationPlayerArr2] = " ";
            arr1[locationPlayerArr1] = "P";

            isForward = true;
        }
        else 
        {
            arr2[locationPlayerArr2] = " ";
            locationPlayerArr2--;

            if (arr2[locationPlayerArr2] == "H")
            {
                arr2[locationPlayerArr2 - 1] = "P";
            }
            else 
            {
                arr2[locationPlayerArr2] = "P";
            }
        }
    }

    PrintArray(arr1, "Backward");
    PrintArray(arr2, "Forward ");

    console.log(isForward);
}

for (let i = 0; i < 40; i++)
{
    Movement();
}
