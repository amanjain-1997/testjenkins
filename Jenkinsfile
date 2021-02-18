pipeline {
    agent any     
    
    if (env.BRANCH_NAME == "main") {                                          
      stages { 
        stage("Build") {
            steps { 
               echo "I am a master branch"
            }
        }
    }    
    } else {  
    stages { 
        stage("Build") {
            steps { 
               echo "I am a development branch"
            }
        }
    }   
    }    
   
}
