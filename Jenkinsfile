pipeline {
    agent any

    tools {
        nodejs 'NodeJs 24' // Jenkins tool name for Node.js
    }

    stages {
        stage('Clone Repo') {
            steps {
stage('Clone Repo') {
  steps {
    sh 'git clone https://github.com/sakshipahwa/playwright-automation.git .'
  }
}
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/playwright-report/**', allowEmptyArchive: true
        }
    }
}
