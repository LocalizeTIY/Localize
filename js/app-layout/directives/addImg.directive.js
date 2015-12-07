// let addImage = function(LocalizeService, UploadService) {
//   return{
//     restrict:'AE',
//     replace :true,
//     scope   :{
//       picture :'='
//     },
//     templateUrl : 'templates/app-layout/uploadImg.tpl.html',
//     link : function(scope,element,attrs){
//       element.on('submit', function(){
//         let file = element.find('input')[0].files[0];
//         UploadService.upload(file).then((res)=>{
          
//           console.log(res);
//           UploadService.tempImage = res.data.url;
//           // LocalizeService.addImage(res.data.upload)
//          }) ;     
//       }),
//        };

//     }

//   };
  

// };

// addImage.$inject = ['LocalizeService', 'UploadService'];

// export default addImage;