pipeline {
    agent any

    tools {
        nodejs 'NodeJs 24' // Jenkins tool name for Node.js
    }

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/sachinjaiya/playwrightTest.git'
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
