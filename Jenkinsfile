pipeline {
    agent {
        docker {
            image 'node:20-alpine3.16' 
            args '-p 3001:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}