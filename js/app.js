// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
	controller: 'loginCtrl'
    
  })
  .state('dash', {
    url: '/dash',
    templateUrl: 'templates/home.html',
	controller: 'DashCtrl'
    
  })
  
  .state('hsa', {
    url: '/hsa',
    templateUrl: 'templates/hsa.html',
	controller: 'DashCtrl'    
  })
  
  .state('fsa', {
    url: '/fsa',
    templateUrl: 'templates/fsa.html',
	controller: 'DashCtrl'    
  })
  
 
  .state('accountDetails', {
    url: '/accountDetails',
    templateUrl: 'templates/page.html',
	controller: 'PageCtrl'    
  })
  
  
  .state('contribution', {
      url: '/contribution',
          templateUrl: 'templates/contribution.html',
          controller: 'ContributionCtrl'
    })
   .state('flexible', {
      url: '/flexible',
          templateUrl: 'templates/flexible.html',
		  controller: 'FlexibleCtrl'
    })
   .state('make', {
      url: '/make',
          templateUrl: 'templates/make.html',
          controller: 'MakeCtrl'  
    })
   .state('disbursement', {
      url: '/disbursement',
          templateUrl: 'templates/disbursement.html',
          controller: 'DisbursementCtrl'
    })
     .state('activity', {
      url: '/activity',
          templateUrl: 'templates/activity.html',
          controller: 'ActivityCtrl'
    })
      .state('health', {
      url: '/health',
          templateUrl: 'templates/health.html',
          controller: 'HealthCtrl'
    })
       
        .state('recent', {
      url: '/recent',
          templateUrl: 'templates/recent.html',
		  controller: 'RecentCtrl'
    })
         .state('recentdisburse', {
      url: '/recentdisburse',
          templateUrl: 'templates/recentdisburse.html',
		  controller: 'RecentdisburseCtrl'
    })
          .state('scheduledcontribute', {
      url: '/scheduledcontribute',
          templateUrl: 'templates/scheduledcontribute.html',
		  controller: 'ScheduledcontributeCtrl'
    })
	
	 .state('scheduleddisbursement', {
      url: '/scheduleddisbursement',
          templateUrl: 'templates/scheduleddisbursement.html',
		  controller: 'ScheduledDisbursementCtrl'
    })
         
           .state('information', {
    url: '/information',
        templateUrl: 'templates/information.html',
		controller: 'InformationCtrl'
  })
  
  
   .state('activitystmnt', {
    url: '/activitystmnt',
        templateUrl: 'templates/activitystmnt.html',
		controller: 'ActivitystmntCtrl'
  })
   
    .state('availablebalance', {
    url: '/availablebalance',
        templateUrl: 'templates/availablebalance.html',
		controller: 'AvailablebalanceCtrl'
  })

.state('account', {
    url: '/account',
        templateUrl: 'templates/account.html',
		controller: 'AccountCtrl'
  })


  .state('payme', {
      url: '/payme',
          templateUrl: 'templates/payme.html',
		  controller: 'PaymeCtrl'
    })
  
  
   .state('newclaim', {
      url: '/newclaim',
          templateUrl: 'templates/newclaim.html',
		  controller: 'newclaimCtrl'
    })
    .state('contact', {
      url: '/contact',
          templateUrl: 'templates/contact.html',
		  controller: 'contactCtrl'
    })
 
 
    .state('taxyear', {
      url: '/taxyear',
          templateUrl: 'templates/taxyear.html',
		  controller: 'TaxyearCtrl'
    })
   .state('recentdis', {
      url: '/recentdis',
          templateUrl: 'templates/recentdisburse.html',
		  controller: 'RecentdisCtrl'
    })
   .state('recentcontribute', {
      url: '/recentcontribute',
          templateUrl: 'templates/recentcontribute.html',
		  controller: 'RecentcontributeCtrl'
    })
	
	.state('flexibleactivity', {
      url: '/flexibleactivity',
          templateUrl: 'templates/flexibleactivity.html',
		  controller: 'FlexibleactivityCtrl'
  })
   
 .state('newclaimbicycle', {
      url: '/newclaimbicycle',
          templateUrl: 'templates/newclaimbicycle.html',
		  controller: 'NewclaimbicycleCtrl'
    })
 
 .state('new', {
      url: '/new',
          templateUrl: 'templates/new.html',
		  controller: 'NewCtrl'
    })
	
	.state('hsastatement', {
      url: '/hsastatement',
      
          templateUrl: 'templates/hsastatement.html',
		  controller: 'HsastatementCtrl'
    })
    
 .state('payprovider', {
      url: '/payprovider',
          templateUrl: 'templates/payprovider.html',
		  controller: 'PayproviderCtrl'
    });

  $urlRouterProvider.otherwise('/login');

});
