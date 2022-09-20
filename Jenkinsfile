pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.10.0-focal' } }
   stages {
      stage('get inside of the directory and use the node version') {
         steps {
            // Depends on your language / test framework
            sh 'cd e2e'
         }
      }
      stage('install playwright') {
         steps {
            // Depends on your language / test framework
            sh 'yarn install'
         }
      }
      stage('run tests') {
         steps {
            // Depends on your language / test framework
            sh 'yarn test'
         }
      }
   }
}
