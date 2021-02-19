pipeline {
    agent any 
    tools {nodejs "node"}
    
    stages {

    stage('ClONING Git') {
      steps {
                git url: 'https://github.com/amanjain-1997/testjenkins.git', branch: env.BRANCH_NAME
    }

    }
    
        
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
     
    stage('Test') {
      steps {
         sh "npm test"
      }
    }  
     
    stage("Build-Main") {
       when { branch "main" }
       steps { 
               echo "I am at the master branch"
        }
     }
    stage("Build") {
       when { branch "development" }
       steps { 
               echo "I am at the development branch"
        }
     }
 }   
}

