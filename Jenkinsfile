pipeline {
  agent any
    
  tools {nodejs "node"}

  stages {
    
   stage('Git Info') {
      steps {
        sh '//...
    git rev-parse --abbrev-ref HEAD > GIT_BRANCH'
    git_branch = readFile('GIT_BRANCH').trim()
    echo git_branch
    //...
   ' 
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
