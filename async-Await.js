		/*------The section is used to get base64 from attached image object------*/
		//	This function is to 
		if ($scope.myFile != undefined) {	//	The section is used to get base64 from attached image object
			const toBase64 = file => new Promise((resolve, reject) => {
				const reader = new FileReader();
				reader.readAsDataURL(file);
				reader.onload = () => {
					return resolve(reader.result);
				}
				reader.onerror = error => reject(error);
			});

			async function hitUpdateAPIWithImgJSONData() {
				imgBase64 = await toBase64(document.querySelector('#logo-id').files[0]);
			}
			hitUpdateAPIWithImgJSONData().then(() => {
				jsonData = $scope.$generatePractitionerJSONData(imgBase64, contactWithoutSpecialChar);
				jsonData["id"] = practitionerId;
				$scope.hitUpdatePractitionerAPI(practitionerId, jsonData);
			});
		} else {
			jsonData = $scope.$generatePractitionerJSONData(imgBase64, contactWithoutSpecialChar);
			jsonData["id"] = practitionerId;
			$scope.hitUpdatePractitionerAPI(practitionerId, jsonData);
		}