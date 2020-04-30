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
  $('img').on('load', function(){
    $('img').addClass(`tasty`)
  });
}

function pressIt()
{
  $('form #typing').on('keydown', function(key){
    if(key.which == 71)
    {
      alert(`You typed a 'G!'`)
    }
  })
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
