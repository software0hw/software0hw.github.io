document.write('<script type="text/javascript" src="binary_tree.js"></script>'); 
document.write('<script type="text/javascript" src="get_firebase.js"></script>'); 
//initialize firebase
var config = {
    apiKey: "AIzaSyB3nSFSeSeboRPnJHczrqJ8wC3bYaJCOBw",
    authDomain: "software0hw-defac.firebaseapp.com",
    databaseURL: "https://software0hw-defac-default-rtdb.firebaseio.com",
    projectId: "software0hw-defac",
    storageBucket: "software0hw-defac.appspot.com",
    messagingSenderId: "189289635598",
    appId: "1:189289635598:web:d4a3cfd6252eb6808c415f",
    measurementId: "G-WNGLH5K466"
  };
firebase.initializeApp(config);
var db = firebase.firestore();

async function set_text(arr){
        var table_content='<table style="width: 60%;">';
//table_content+="<tr><th><p>現在比到</p></th><th><p>現在比到</p></th></tr>";
table_content+="<tr style='text-align: center;'><th>場次</th><th>比賽隊伍</th><th>分數</th><th>勝者</th></tr>";

//        return new Promise(function(resolve, reject){
    let str_arr=new Array(team_arr1.length);
    for(let i=0;i<team_arr1.length;i++){

//                        table_content+="<td>";
        let tree_value=new Array(team_arr1.length);
        for(let i=0;i<tree_value.length;i++)
        {
            tree_value[i]= await get_treedata("binary_tree",team_arr1[i]);
        }
        var el =document.getElementById("main");
        arr=tree_value[i];
            let str_arr=new Array(arr["sheet"][1]%100);
    let j=0;
    let count=0;
    for(let i =arr["sheet"].length;i>0;i--){

        let str="";
        count=0;

        if(arr["sheet"][i]>0){
                    table_content+="<tr style=''>";
                    table_content+='<td style="text-align: center;">'
            table_content+=arr["sheet"][i] + "</td>";
            str=arr["sheet"][i]+":";
                    table_content+='<td text-align: center;">'
            if(arr["mb"][i*2]>0){
                table_content+="尚未有結果" ;
                str+="尚未有結果";
            }else{
                table_content+= arr["mb"][i*2];
                str+=arr["mb"][i*2];
                count++;
            }
            table_content+=" vs "
            str+="vs";
            if(arr["mb"][i*2+1]>0){
                table_content+="尚未有結果" + "</td>";
                str+="尚未有結果";
            }else{
                table_content+=arr["mb"][i*2+1] + "</td>";
                str+=arr["mb"][i*2+1];
                count++;
            }
            if(count==2){
                result=await get_result("計分",arr['sheet'][i].toString());                            console.log(result); 
                if(result !=null){
                            table_content+='<td style="text-align: center;">'
                table_content+=result.player1_point+" vs "+result.player2_point + "</td>";
                            table_content+='<td style="text-align: center;">'
                                    table_content+=result.win + "</td>";
                str+=" "+result.player1_point+" vs "+result.player2_point+"    "+result.win;
                }
                else{
                             table_content+='<td style="text-align: center;">'
                table_content+='-'+"</td>";
                 table_content+='<td style="text-align: center;">'
                table_content+='-'+"</td>";
                }
            }
            else{
                table_content+='<td style="text-align: center;">'
                table_content+='-'+"</td>";
                 table_content+='<td style="text-align: center;">'
                table_content+='-'+"</td>";
            }
//            table_content+="<td>" + str + "</td>";
            str_arr[j]=str;
            j++;
                    
        }
        table_content+="</tr>";
    }
//        table_content+="</td>";
    }
//        table_content+="</tr>"
    table_content+="</table>";
    console.log(table_content)
    el.innerHTML=table_content;

//            resolve(str_arr)
//            });
//    return str_arr;
    console.log('OK')
}
var team_arr1;
window.onload=async function(){

    team_arr=await get_team();
    team_arr1=team_arr;

//    for(let i=0;i<team_arr.length;i++){
//        str_arr[i]= set_text(tree_value[i]);
//    }
    
 set_text();
//    for(let i=0;i<team_arr.length;i++){
//        str+="<td>";
//        for( let j =0;j<str_arr[i].length;j++){
//            console.log(str_arr[i][j])
//            str+='<p>'+str_arr[i][j]+'</p>';
//        }
//        str+="</td>";
//    }
//    table_content+="</tr>"
//    table_content+="</table>";
//    el.innerHTML=table_content;
}