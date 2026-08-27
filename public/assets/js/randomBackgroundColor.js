function changeBackgroundColor()
{
   const COLOR_CHANNEL_COUNT = 256;

   const redValue = Math.floor(Math.random() * COLOR_CHANNEL_COUNT);
   const greenValue = Math.floor(Math.random() * COLOR_CHANNEL_COUNT);
   const blueValue = Math.floor(Math.random() * COLOR_CHANNEL_COUNT);

   document.body.style.backgroundColor =
      "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
}
