// let eventItem = function(featuredService) {

// 	return{
// 		restrict: 'E',
// 		trasclude: true,
// 		scope: {
// 			event: '='
// 		},

// 		template: `
// 			<div class='featuredStuff'>
// 				<ng-repeat='{{event.name}}' class='eventName'>
// 			</div>
// 		`,

// 		// controller: 'FeaturedController as vm'
// 		link: function (scope, element, attrs) {
// 			element.on('click', function () {
// 				console.log('eventClick');
// 				// element.goto('')
// 			});
// 		}
// 	};
// }