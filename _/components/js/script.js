/********
                                                                                            
                                                                                            
                                   `.,,,,,,,,..`                                            
                            .,,,,,,,,,,,,,,,,,,,,,,,,,.                                     
                       `,,,,,,,,,,,,,,,,,.``        `.,,,,,`                                
                    .:,,,,,,,,,,,,,`                       `,,`                             
                 `,,,,,,,,,,,,,`                                ,`                          
               .,,,,,,,,,,,,`                                      `                        
             .:,,,,,,,,,,.                                                                  
           `,,,,,,,,,,,.                                                                    
          ,:,,,,,,,,,,                                                                      
        `,,,,,,,,,,,.                                                                       
       `,,,,,,,,,,:`                                                                        
      `:,,,,,,,,,,`                                                                         
     `,,,,,,,,,,:`                                                                          
     ,,,,,,,,,,,.                                                                           
    `:,,,,,,,,,,`                                                                           
    ,,,,,,,,,,,.                                                                            
   `,,,,,,,,,,:`                                                                            
   `,,,,,,,,,,:`                                                                            
   .,,,,,,,,,,,                                                                             
   .,,,,,,,,,,:`                         ```````````.............,,,,,,,,,,,,,:`            
   .,,,,,,,,,,:`                         ```````````..............,,,,,,,,,,,,:`            
   `,,,,,,,,,,:.                          ````````````````...............,,,,,,`            
   `,,,,,,,,,,,,`                                                                           
    ,,,,,,,,,,,:.                                                                           
    `:,,,,,,,,,,:`                                                           `              
     .,,,,,,,,,,,,`                                                         ``              
      ,,,,,,,,,,,,:`                                                       `.               
      `,,,,,,,,,,,,,`                                                     `,                
       `,,,,,,,,,,,,,,                                                   .,                 
         ,,,,,,,,,,,,,:.                                               `:.                  
          .:,,,,,,,,,,,,:.                                           `,,`                   
           `,,,,,,,,,,,,,,,,`                                      ,,,,                     
             `,,,,,,,,,,,,,,,,,`                                .,,,,`                      
               `,,,,,,,,,,,,,,,,,,,`                       `.,,,,,,`                        
                  ,:,,,,,,,,,,,,,,,,,,,,,.``        `.,,,,,,,,,,.                           
                    `,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,                              
                        .:,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,`                                 
                             .,:,,,,,,,,,,,,,,,,,,,,,.                                      
                                     ```...```                                              
                                                                                            
                                                                                            
                                                                                            
                   ```...,,,::::::::::::::::::::::::::::,,,..```                            
           ,::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::`                   
               ``.,,,,,::::::::::::::::::::::::::::::::::::::,,,,..`                        
                                                                                                    
                                                                                                    
                                                                                                    

********/

// initialize global variables

var show_log = true;

// plugins
(function ( $ ) {
    $.logThis = function(m) {
        if (show_log) {
            if( (window['console'] !== undefined) ){
                console.log( m );
            }
        }
    }
}( jQuery ));
$(document).ready(function(){
    $.logThis('The javascript loaded correctly');
});