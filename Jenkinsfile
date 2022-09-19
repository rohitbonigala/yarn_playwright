pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright:v1.25.0-focal' } }
   stages {
      stage('e2e-tests') {
         steps {
            // Depends on your language / test framework
            sh 'cd e2e'
            sh 'nvm use 14.1.0'
            sh 'yarn test'
         }
      }
   }
}