//define functions here
function getIt()
{
  $(`p`).on(`click`, function()
  {
    alert(`Hey!`)
  })
}

function srcIt()
{
  $('img').attr('src', "https://s3.amazonaws.com/after-school-assets/minion-tongue.jpg")
}

function frameIt()
{
  $('img').on('load', function(){
    $('img').addClass(`tasty`)
  });
}

function pressIt()
{
  //$('form #typing')
}

function submitIt()
{

}

$(document).ready(function()
{
  getIt()
  frameIt()
  srcIt()
  pressIt()
  submitIt()
});
