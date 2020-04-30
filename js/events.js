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
  $(`img`).on(`load`, function()
  {
    console.log("before" + $('img')[0].class)
    $('img').addClass(`tasty`)
    console.log("after" + $('img')[0].class)
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
