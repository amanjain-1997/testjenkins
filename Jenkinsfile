pipeline {
    agent any 
    stages { 
        stage("Build") {
            when { branch "main" }
            steps { 
               echo "I am a master branch"
            }
        }
    }
}
