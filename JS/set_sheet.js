//set name
let team_arr;
let participant_arr;
//get binary tree
let tree_value;
//get firebase team and participant
async function get_participant(){
    team_arr=await getdata("team","all_team");
    participant_arr=new Array(team_arr.length);
    for(let i =0;i<team_arr.length;i++){
        participant_arr[i]=await getdata("team",team_arr[i]);
    }
}
async function get_team(){
    team= await getdata("team","all_team");
    return team;
}
async function set_tree(){
    alert('正在產生新的賽程表', 'warning');
    await get_participant();
    tree_value=new Array(team_arr.length);
    for(let i=0;i<team_arr.length;i++){
        tree_value[i]=binary_tree(participant_arr[i],team_arr[i],i);
    }
//    window.location.reload();
}

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
function alert(message,type) {
  var wrapper = document.createElement('div');
wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible fade show" role="alert" style="text-align: center; font-size: 35px;">' + message + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">&times;</span></button></div>';



  $("#liveAlertPlaceholder").append(wrapper);
}
