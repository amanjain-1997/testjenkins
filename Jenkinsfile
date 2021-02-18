pipeline {
    agent any 
    stages { 
        stage("Build") {
            when { branch "master" }
            steps { 
               echo "I am a master branch"
            }
        }
    }
}
