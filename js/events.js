//define functions here
function getIt()
{
  $(`p`).on(`click`, function()
  {
    alert(`Hey!`)
  })
}

function frameIt()
{
  $(`img`).on(`click`, function()
  {
    console.log("before" + $('img').class)
    $('img').class = '.tasty'
    console.log("after" + $('img').class)
  })
}

function pressIt()
{

}

function submitIt()
{

}

$(document).ready(function()
{
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
