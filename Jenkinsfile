pipeline {
    agent any
    stages {
        stage('Many tests') {
            steps {
                sh 'cd e2e'
                sh 'yarn install'
                sh 'yarn test'
            }
        }
    }
}
