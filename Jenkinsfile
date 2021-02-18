pipeline {
  agent any
    
  tools {nodejs "node"}

  stages {
    
   stage('Git Info') {
      steps {
       scmInfo = checkout scm
        /*...*/
        echo "scm : ${scmInfo}"
        echo "${scmInfo.GIT_COMMIT}"
      }
    }
    stage('Cloning Git') {
      steps {
                git url: 'https://github.com/amanjain-1997/testjenkins.git', branch: 'main'  
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
    
  }
}
