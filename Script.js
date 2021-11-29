var request=new XMLHttpRequest();
request.open('Get','https://jsonplaceholder.typicode.com/posts');
request.send();
request.onload=function(){
   // console.log(this.response);

var data = JSON.parse(this.response);
//console.log(data.length);

for(let i=0;i<data.length;i++){
    console.log(data[i].id);
}

}
