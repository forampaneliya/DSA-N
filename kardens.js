let arr=[5,4,-1,2,3,-8];
let sum=arr[0];
let max=arr[0]

for(let i=0;i<arr.length;i++)
    {
       sum=sum+arr[i];
       if(max<0)
        {
           sum=0;
        }
      else if(sum>max)
        {
            max=sum;
            // [max],[sum]
            // sum=max;
        }
        // console.log(sum);

    }
    console.log(sum);

