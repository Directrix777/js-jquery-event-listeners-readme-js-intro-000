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
    $('img')[0].class = 'tasty'
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
