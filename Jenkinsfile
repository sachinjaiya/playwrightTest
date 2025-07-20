pipeline {
    agent any

    tools {
        nodejs 'NodeJs 24'  // ✅ Must match exactly what you configured
    }

    stages {
        stage('Manual Clone Repo') {
            steps {
                // Cloning into current workspace (.)
                sh 'git clone https://github.com/sachinjaiya/playwrightTest.git .'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
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
