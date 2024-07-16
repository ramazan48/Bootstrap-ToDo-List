var colorArray = 
[ '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF',
  '#FF0000', '#00FFFF', '#C0C0C0', '#00008B', '#7FFFD4',
  '#ADD8E6',	'#FFA500', '#800080',	'#A52A2A','#FFC0CB',
  '#FFFF00', '#800000', '#00FF00', '#008000', '#FF00FF',
  '#808000'];
var add = document.getElementById('addToDo');
var input = document.getElementById('inputField');
var toDoContainer = document.getElementById('toDoContainer');
//add.addEventListener('click',addItem);
input.addEventListener('keypress',function(e){
    if(e.key=="Enter" && input.value!= ""){
        addItem();
      }
});
function addItem(e){
  const item_value  = input.value;
  //change
  //to check to whether gets the item_value or not
  //console.log(item_value);
  if(/^\s*$/.test(item_value)){
    alert("You can not add empty string");
    return 0;
  }
  else{
    alert("Task has been added");
  }
  const item = document.createElement('div');
  item.classList.add('item');

  const item_content = document.createElement('div');
  item_content.classList.add('content');
  item.appendChild(item_content);

  const input_item = document.createElement('input');
  input_item.classList.add('text','margarine-regular');
  input_item.value = item_value;
  input_item.setAttribute('readonly', 'readonly');

  //Produce random numbers between 0 and max(input)
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  //It changes each input-text-background-color
  input_item.style.color = "white";
  input_item.style.backgroundColor = colorArray[getRandomInt(66)];
  input_item.style.fontSize = "1.1vw";

  item_content.appendChild(input_item);
  const item_action = document.createElement('div');
  item_action.classList.add('actions');

  const edit_item = document.createElement('button');
  edit_item.classList.add('edit','btn','btn-success');
  edit_item.style.fontSize = "1.1vw";
  edit_item.type = 'button';
  edit_item.innerText = 'Edit';

  const done_item = document.createElement('button');
  done_item.classList.add('done','btn','btn-primary');
  done_item.style.fontSize = "1.1vw";
  done_item.type = 'button';
  done_item.innerText = 'Done';
  done_item.style.color = 'white';

  const delete_item = document.createElement('buttonn');
  delete_item.style.fontSize = "1.4vw";
  delete_item.classList.add('delete','btn','btn-danger','fa','fa-trash');
  

  item_action.appendChild(done_item);
  item_action.appendChild(edit_item);
  item_action.appendChild(delete_item);
  item.appendChild(item_action);

  toDoContainer.appendChild(item);

  //Completing tasks
  done_item.addEventListener('click', (e)=> {
    input_item.style.textDecoration = 'line-through';
    input_item.style.textDecorationColor = "black";

    alert("The task has been completed");
  }) 
  //Editing tasks
  input.value = '';
  edit_item.addEventListener('click', (e) => {
    if(edit_item.innerText.toLowerCase() == "edit"){
      if(input_item.style.textDecorationColor == "black"){
        alert("You cannot edit completed task");
        return 0;
      }
        edit_item.innerText = "Save";
        input_item.removeAttribute("readonly");
        input_item.focus();
      }
    else{
        //Edit input
        //console.log(input_item.value);
        if(/^\s*$/.test(input_item.value)){
          alert("You can not add empty string");
          return 0;
        }
        edit_item.innerText = "Edit";
        input_item.setAttribute("readonly", "readonly");
        alert("Task has been edited");
      }
  
  });

  //Deleting tasks
  delete_item.addEventListener('click', (e) => {
    toDoContainer.removeChild(item);
    alert("Task has been deleted");
  })
}