function LRotateOne(arr : number[], n : number)
{
    let temp : number = arr[0];
    let i;

    for (i = 0; i < n - 1; i++)
    {
        arr[i] = arr[i+1];
    }

    arr[i] = temp;
}


function LRotate(arr : number[], d : number, n : number,  arr2 : number[])
{
    for (let i = 0; i < d; i++)
    {
        LRotateOne(arr,n);

        if (arr[0] == 1)
        {
            arr2[6] = 1;
            arr[0] = 0;
        }
        else if (arr[0] == 3)
        {
            arr2[6] = 3;
            arr[0] = 0;
        }
    }
}

function RRotateOne(arr : number[], n : number)
{
    let temp : number = arr[6];
    let i;

    for (i = 6; i > 0; i--)
    {
        arr[i] = arr[i-1];
    }

    arr[0] = temp;
}


function RRotate(arr : number[], d : number, n : number, arr2 : number[])
{
    for (let i = 0; i < d; i++)
    {
        RRotateOne(arr,n);

        if (arr[6] == 1)
        {
            arr[6] = 0;
            arr2[6] = 1;
        }
        else if (arr[6] == 3)
        {
            arr[6] = 0;
            arr2[6] = 3;
        }
    }
}

function PrintArray(arr : number[])
{
    console.log(arr);
}

let arr1 : number[] = [0, 0, 0, 0, 1, 0, 0];
let arr2 : number[] = [0, 0, 3, 0, 0, 0, 0];

for (let i = 0; i < 20; i++)
{
    LRotate(arr1,1,arr1.length, arr2);
    RRotate(arr2,1,arr2.length, arr1);

    PrintArray(arr1);
    PrintArray(arr2);

    console.log("\n");
}
