function getdata(h1,h2) {
    return new Promise(function(resolve, reject){
        let getdata_return_data=null;
        let docRef = db.collection(h1).doc(h2);

          docRef.get().then(function(doc) {
              if (doc.exists) {
                let get_data=''
                get_data=doc.data().data;
                if (get_data.length>0){
                    getdata_return_data=get_data;
                }
                resolve(getdata_return_data);

              } else {
                console.log("找不到文件");
              }
            })
            .catch(function(error) {
              console.log("提取文件時出錯:", error);
            });
        
        });
    }
    function get_treedata(h1,h2) {
      return new Promise(function(resolve, reject){``
          let getdata_return_data=null;
          let docRef = db.collection(h1).doc(h2);
            docRef.get().then(function(doc) {
                if (doc.exists) {
                  let get_sheet;
                  let get_mb;
                  get_sheet=doc.data().sheet_data;
                  get_mb=doc.data().mb_data;
                  if (get_sheet.length>0){
                      getdata_return_data={
                      sheet:get_sheet,
                      mb:get_mb
                     }
                  }
                  resolve(getdata_return_data);
  
                } else {
                  console.log("找不到文件");
                }
              })
              .catch(function(error) {
                console.log("提取文件時出錯:", error);
              });
          
          });
      }
     async function get_result(h1,h2) {

        return new Promise(function(resolve, reject){
            let getdata_return_data=null;
            let docRef = db.collection(h1).doc(h2);
              docRef.get().then(function(doc) {
                  if (doc.exists) {
                    let data=doc.data();
                    let get_p1_point;
                    let get_p2_point;
                    let get_win;
                    get_p1_point=doc.data().player1_point;
                    get_p2_point=doc.data().player2_point;
                    get_win=doc.data().win;
                    
//                    if (data!=null){
                        getdata_return_data={
                        player1_point:get_p1_point,
                        player2_point:get_p2_point,
                        win:get_win
                       }
//                    }
//                      console.log(getdata_return_data);
                    resolve(getdata_return_data);
    
                  } else {
                    console.log("找不到文件");
                    resolve(getdata_return_data);
                  }
                })
                .catch(function(error) {
                  console.log("提取文件時出錯:", error);
                  resolve(getdata_return_data);
                });
            });

        }