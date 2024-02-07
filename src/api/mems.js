export const memeapi =async ()=>
{
    const response=await fetch('https://api.imgflip.com/get_memes');
    const res= await response.json();
    console.log('res :',res)
    return res?.data?.memes;
   
}