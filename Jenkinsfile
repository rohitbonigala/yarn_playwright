pipeline {
    agent any
    stages {
        withEnv(['PATH+NODE=/something=/path/to/node/bin']) {
        stage('Many tests') {
            steps {
                sh 'cd e2e'
                sh 'npm install -g yarn'
                sh 'yarn install'
                sh 'yarn test'
            }
        }
      }
    }
}
