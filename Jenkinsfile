pipeline {
    agent any 
    tools {nodejs "node"}
    
    stages {
        
    stage('Cloning Git') {
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

    stage('SSH transfer Main') {
       when { branch "main" }
        steps([$class: 'BapSshPromotionPublisherPlugin']) {
            sshPublisher(
                continueOnError: false, failOnError: true,
                publishers: [
                    sshPublisherDesc(
                        configName: "yactraq-vm13",
                        verbose: true,
                        transfers: [
                        //sshTransfer(execCommand: 'echo "hello" > abcd.txt')
                         sshTransfer(execCommand: 'cd testjenkins; git stash; git pull; npm install; pm2 restart 1')
                        ]
                    )
                ]
            )
        }
    }

    stage("Build-Dev") {
       when { branch "development" }
       steps { 
               echo "I am at the development branch"
    }
   }
     
     
    stage("Build-Main") {
       when { branch "main" }
       steps { 
               echo "I am at the master branch"
        }
     }


 }   
}
