pipeline {
  agent any
    
  tools {nodejs "node"}
  
  script {
    def BRANCH = sh(returnStdout: true, script: 'git rev-parse --abbrev-ref HEAD').trim()
    echo ${BRANCH}
  }  
  stages {
        
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
