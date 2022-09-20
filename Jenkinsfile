pipeline {
    agent any
    stages {
        stage('Many tests') {
            agent {
                docker {
                    image 'mcr.microsoft.com/playwright:v1.17.1'
                }
            }
            steps {
                sh 'cd e2e'
                sh 'yarn install'
                sh 'yarn test'
            }
        }
    }
}
