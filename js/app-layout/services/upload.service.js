let UploadService = function ($http, PARSE) {
  
  this.upload = upload;
  this.tempImage = '';
  

  function upload(file){

    PARSE.CONFIG.headers['Content-Type'] = null;

    return $http({
      url: PARSE.URL + 'files/' + file.name,
      method: 'POST',
      data: file,
      contentType: false,
      headers: PARSE.CONFIG.headers
    });

  }
  

};

UploadService.$inject = ['$http','PARSE'];

export default UploadService;