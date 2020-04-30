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
  $('img')[0].class = 'tasty'
  $(`img`).on(`click`, function()
  {
    console.log($('img')[0].class)
    $('img').class = '.tasty'
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
