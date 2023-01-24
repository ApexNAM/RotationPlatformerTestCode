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


function LRotate(arr : number[], d : number, n : number)
{
    for (let i = 0; i < d; i++)
    {
        LRotateOne(arr,n);
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


function RRotate(arr : number[], d : number, n : number)
{
    for (let i = 0; i < d; i++)
    {
        RRotateOne(arr,n);
    }
}

function PrintArray(arr : number[], gName : string)
{
    console.log(gName , arr);
}


let arr1 : number[] = [0, 0, 0, 1, 0, 0, 0];
let arr2 : number[] = [0, 0, 0, 0, 0, 0, 0];

let isForward : boolean = false;

function Movement()
{
    if (isForward)
    {
        RRotate(arr2,1,arr2.length);

        if (arr2[0] == 1)
        {
            for (let i =0; i < 6; i++)
            {
                arr2[i] = 0;
            }

            arr1[6] = 1;
            isForward = false;
        }
    }
    else
    {
        LRotate(arr1,1,arr1.length);

        if (arr1[6] == 1)
        {
            arr1[6] = 0;
            arr2[0] = 1; 

            isForward = true;          
        }
    }

    PrintArray(arr1, "Backward");
    PrintArray(arr2, "Forward ");

    console.log();
}

for (let i = 0; i < 20; i++)
{
    Movement();
}
