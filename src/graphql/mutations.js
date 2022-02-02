/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLicensesBulk = /* GraphQL */ `
  mutation CreateLicensesBulk(
    $validTo: String
    $numberOfLicenses: Int
    $tenantId: String
  ) {
    createLicensesBulk(
      validTo: $validTo
      numberOfLicenses: $numberOfLicenses
      tenantId: $tenantId
    )
  }
`;
export const createRegistrationCodesBulk = /* GraphQL */ `
  mutation CreateRegistrationCodesBulk(
    $validTo: String
    $numberOfCodes: Int
    $tenantId: String
  ) {
    createRegistrationCodesBulk(
      validTo: $validTo
      numberOfCodes: $numberOfCodes
      tenantId: $tenantId
    )
  }
`;
export const disableUser = /* GraphQL */ `
  mutation DisableUser {
    disableUser
  }
`;
export const deleteBrazeUser = /* GraphQL */ `
  mutation DeleteBrazeUser($externalId: String) {
    deleteBrazeUser(externalId: $externalId)
  }
`;
export const syncTenantJobs = /* GraphQL */ `
  mutation SyncTenantJobs($jobIds: [ID!]!, $tenantId: ID!) {
    syncTenantJobs(jobIds: $jobIds, tenantId: $tenantId)
  }
`;
export const sendMail = /* GraphQL */ `
  mutation SendMail {
    sendMail
  }
`;
export const sendPushToUser = /* GraphQL */ `
  mutation SendPushToUser(
    $userSub: ID!
    $title: String!
    $body: String!
    $url: String
  ) {
    sendPushToUser(userSub: $userSub, title: $title, body: $body, url: $url)
  }
`;
export const mapCognitoUsers = /* GraphQL */ `
  mutation MapCognitoUsers {
    mapCognitoUsers
  }
`;
export const createUserMapping = /* GraphQL */ `
  mutation CreateUserMapping(
    $input: CreateUserMappingInput!
    $condition: ModelUserMappingConditionInput
  ) {
    createUserMapping(input: $input, condition: $condition) {
      id
      custom_user_id
      identity_sub
      createdAt
      updatedAt
    }
  }
`;
export const updateUserMapping = /* GraphQL */ `
  mutation UpdateUserMapping(
    $input: UpdateUserMappingInput!
    $condition: ModelUserMappingConditionInput
  ) {
    updateUserMapping(input: $input, condition: $condition) {
      id
      custom_user_id
      identity_sub
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserMapping = /* GraphQL */ `
  mutation DeleteUserMapping(
    $input: DeleteUserMappingInput!
    $condition: ModelUserMappingConditionInput
  ) {
    deleteUserMapping(input: $input, condition: $condition) {
      id
      custom_user_id
      identity_sub
      createdAt
      updatedAt
    }
  }
`;
export const createTenant = /* GraphQL */ `
  mutation CreateTenant(
    $input: CreateTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    createTenant(input: $input, condition: $condition) {
      id
      type
      name
      email_domains
      licenses {
        nextToken
      }
      jobs {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateTenant = /* GraphQL */ `
  mutation UpdateTenant(
    $input: UpdateTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    updateTenant(input: $input, condition: $condition) {
      id
      type
      name
      email_domains
      licenses {
        nextToken
      }
      jobs {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteTenant = /* GraphQL */ `
  mutation DeleteTenant(
    $input: DeleteTenantInput!
    $condition: ModelTenantConditionInput
  ) {
    deleteTenant(input: $input, condition: $condition) {
      id
      type
      name
      email_domains
      licenses {
        nextToken
      }
      jobs {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createTenantBookedMindPackage = /* GraphQL */ `
  mutation CreateTenantBookedMindPackage(
    $input: CreateTenantBookedMindPackageInput!
    $condition: ModelTenantBookedMindPackageConditionInput
  ) {
    createTenantBookedMindPackage(input: $input, condition: $condition) {
      id
      tenant_id
      package_id
      createdAt
      updatedAt
    }
  }
`;
export const updateTenantBookedMindPackage = /* GraphQL */ `
  mutation UpdateTenantBookedMindPackage(
    $input: UpdateTenantBookedMindPackageInput!
    $condition: ModelTenantBookedMindPackageConditionInput
  ) {
    updateTenantBookedMindPackage(input: $input, condition: $condition) {
      id
      tenant_id
      package_id
      createdAt
      updatedAt
    }
  }
`;
export const deleteTenantBookedMindPackage = /* GraphQL */ `
  mutation DeleteTenantBookedMindPackage(
    $input: DeleteTenantBookedMindPackageInput!
    $condition: ModelTenantBookedMindPackageConditionInput
  ) {
    deleteTenantBookedMindPackage(input: $input, condition: $condition) {
      id
      tenant_id
      package_id
      createdAt
      updatedAt
    }
  }
`;
export const createTenantBookedTrainingModule = /* GraphQL */ `
  mutation CreateTenantBookedTrainingModule(
    $input: CreateTenantBookedTrainingModuleInput!
    $condition: ModelTenantBookedTrainingModuleConditionInput
  ) {
    createTenantBookedTrainingModule(input: $input, condition: $condition) {
      id
      tenant_id
      module_id
      with_analyse
      createdAt
      updatedAt
    }
  }
`;
export const updateTenantBookedTrainingModule = /* GraphQL */ `
  mutation UpdateTenantBookedTrainingModule(
    $input: UpdateTenantBookedTrainingModuleInput!
    $condition: ModelTenantBookedTrainingModuleConditionInput
  ) {
    updateTenantBookedTrainingModule(input: $input, condition: $condition) {
      id
      tenant_id
      module_id
      with_analyse
      createdAt
      updatedAt
    }
  }
`;
export const deleteTenantBookedTrainingModule = /* GraphQL */ `
  mutation DeleteTenantBookedTrainingModule(
    $input: DeleteTenantBookedTrainingModuleInput!
    $condition: ModelTenantBookedTrainingModuleConditionInput
  ) {
    deleteTenantBookedTrainingModule(input: $input, condition: $condition) {
      id
      tenant_id
      module_id
      with_analyse
      createdAt
      updatedAt
    }
  }
`;
export const createCrispSession = /* GraphQL */ `
  mutation CreateCrispSession(
    $input: CreateCrispSessionInput!
    $condition: ModelCrispSessionConditionInput
  ) {
    createCrispSession(input: $input, condition: $condition) {
      id
      identity_sub
      crisp_session_id
      push_endpoint_id
      platform
      createdAt
      updatedAt
    }
  }
`;
export const updateCrispSession = /* GraphQL */ `
  mutation UpdateCrispSession(
    $input: UpdateCrispSessionInput!
    $condition: ModelCrispSessionConditionInput
  ) {
    updateCrispSession(input: $input, condition: $condition) {
      id
      identity_sub
      crisp_session_id
      push_endpoint_id
      platform
      createdAt
      updatedAt
    }
  }
`;
export const deleteCrispSession = /* GraphQL */ `
  mutation DeleteCrispSession(
    $input: DeleteCrispSessionInput!
    $condition: ModelCrispSessionConditionInput
  ) {
    deleteCrispSession(input: $input, condition: $condition) {
      id
      identity_sub
      crisp_session_id
      push_endpoint_id
      platform
      createdAt
      updatedAt
    }
  }
`;
export const createLicense = /* GraphQL */ `
  mutation CreateLicense(
    $input: CreateLicenseInput!
    $condition: ModelLicenseConditionInput
  ) {
    createLicense(input: $input, condition: $condition) {
      id
      type
      tenant_id
      identity_sub
      user
      validTo
      tenant {
        id
        type
        name
        email_domains
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateLicense = /* GraphQL */ `
  mutation UpdateLicense(
    $input: UpdateLicenseInput!
    $condition: ModelLicenseConditionInput
  ) {
    updateLicense(input: $input, condition: $condition) {
      id
      type
      tenant_id
      identity_sub
      user
      validTo
      tenant {
        id
        type
        name
        email_domains
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteLicense = /* GraphQL */ `
  mutation DeleteLicense(
    $input: DeleteLicenseInput!
    $condition: ModelLicenseConditionInput
  ) {
    deleteLicense(input: $input, condition: $condition) {
      id
      type
      tenant_id
      identity_sub
      user
      validTo
      tenant {
        id
        type
        name
        email_domains
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRegistrationCode = /* GraphQL */ `
  mutation CreateRegistrationCode(
    $input: CreateRegistrationCodeInput!
    $condition: ModelRegistrationCodeConditionInput
  ) {
    createRegistrationCode(input: $input, condition: $condition) {
      id
      code
      tenant_id
      identity_sub
      license_id
      used_at
      valid_to
      reserved_at
      tenant {
        id
        type
        name
        email_domains
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateRegistrationCode = /* GraphQL */ `
  mutation UpdateRegistrationCode(
    $input: UpdateRegistrationCodeInput!
    $condition: ModelRegistrationCodeConditionInput
  ) {
    updateRegistrationCode(input: $input, condition: $condition) {
      id
      code
      tenant_id
      identity_sub
      license_id
      used_at
      valid_to
      reserved_at
      tenant {
        id
        type
        name
        email_domains
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteRegistrationCode = /* GraphQL */ `
  mutation DeleteRegistrationCode(
    $input: DeleteRegistrationCodeInput!
    $condition: ModelRegistrationCodeConditionInput
  ) {
    deleteRegistrationCode(input: $input, condition: $condition) {
      id
      code
      tenant_id
      identity_sub
      license_id
      used_at
      valid_to
      reserved_at
      tenant {
        id
        type
        name
        email_domains
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createJobTenant = /* GraphQL */ `
  mutation CreateJobTenant(
    $input: CreateJobTenantInput!
    $condition: ModelJobTenantConditionInput
  ) {
    createJobTenant(input: $input, condition: $condition) {
      id
      job_id
      tenant_id
      tenant {
        id
        type
        name
        email_domains
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      job {
        id
        name
        type
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateJobTenant = /* GraphQL */ `
  mutation UpdateJobTenant(
    $input: UpdateJobTenantInput!
    $condition: ModelJobTenantConditionInput
  ) {
    updateJobTenant(input: $input, condition: $condition) {
      id
      job_id
      tenant_id
      tenant {
        id
        type
        name
        email_domains
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      job {
        id
        name
        type
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteJobTenant = /* GraphQL */ `
  mutation DeleteJobTenant(
    $input: DeleteJobTenantInput!
    $condition: ModelJobTenantConditionInput
  ) {
    deleteJobTenant(input: $input, condition: $condition) {
      id
      job_id
      tenant_id
      tenant {
        id
        type
        name
        email_domains
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      job {
        id
        name
        type
        createdAt
        updatedAt
      }
    }
  }
`;
export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
    createJob(input: $input, condition: $condition) {
      id
      name
      type
      tenants {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $input: UpdateJobInput!
    $condition: ModelJobConditionInput
  ) {
    updateJob(input: $input, condition: $condition) {
      id
      name
      type
      tenants {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
      id
      name
      type
      tenants {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAnamnese = /* GraphQL */ `
  mutation CreateAnamnese(
    $input: CreateAnamneseInput!
    $condition: ModelAnamneseConditionInput
  ) {
    createAnamnese(input: $input, condition: $condition) {
      id
      identity_sub
      anamnese_type
      processed_at
      gender
      body_size
      body_weight
      birthdate
      is_performing_job
      is_pregnant
      has_contraindications
      pain_medication
      body_part_pain {
        body_part
        severity
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAnamnese = /* GraphQL */ `
  mutation UpdateAnamnese(
    $input: UpdateAnamneseInput!
    $condition: ModelAnamneseConditionInput
  ) {
    updateAnamnese(input: $input, condition: $condition) {
      id
      identity_sub
      anamnese_type
      processed_at
      gender
      body_size
      body_weight
      birthdate
      is_performing_job
      is_pregnant
      has_contraindications
      pain_medication
      body_part_pain {
        body_part
        severity
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAnamnese = /* GraphQL */ `
  mutation DeleteAnamnese(
    $input: DeleteAnamneseInput!
    $condition: ModelAnamneseConditionInput
  ) {
    deleteAnamnese(input: $input, condition: $condition) {
      id
      identity_sub
      anamnese_type
      processed_at
      gender
      body_size
      body_weight
      birthdate
      is_performing_job
      is_pregnant
      has_contraindications
      pain_medication
      body_part_pain {
        body_part
        severity
      }
      createdAt
      updatedAt
    }
  }
`;
export const createUserMindProgress = /* GraphQL */ `
  mutation CreateUserMindProgress(
    $input: CreateUserMindProgressInput!
    $condition: ModelUserMindProgressConditionInput
  ) {
    createUserMindProgress(input: $input, condition: $condition) {
      id
      identity_sub
      source_id
      source_type
      result_id
      result {
        id
        identity_sub
        mind_task_id
        state
        createdAt
        updatedAt
      }
      completed_at
      started_at
      createdAt
      updatedAt
    }
  }
`;
export const updateUserMindProgress = /* GraphQL */ `
  mutation UpdateUserMindProgress(
    $input: UpdateUserMindProgressInput!
    $condition: ModelUserMindProgressConditionInput
  ) {
    updateUserMindProgress(input: $input, condition: $condition) {
      id
      identity_sub
      source_id
      source_type
      result_id
      result {
        id
        identity_sub
        mind_task_id
        state
        createdAt
        updatedAt
      }
      completed_at
      started_at
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserMindProgress = /* GraphQL */ `
  mutation DeleteUserMindProgress(
    $input: DeleteUserMindProgressInput!
    $condition: ModelUserMindProgressConditionInput
  ) {
    deleteUserMindProgress(input: $input, condition: $condition) {
      id
      identity_sub
      source_id
      source_type
      result_id
      result {
        id
        identity_sub
        mind_task_id
        state
        createdAt
        updatedAt
      }
      completed_at
      started_at
      createdAt
      updatedAt
    }
  }
`;
export const createUserMindEvaluationResult = /* GraphQL */ `
  mutation CreateUserMindEvaluationResult(
    $input: CreateUserMindEvaluationResultInput!
    $condition: ModelUserMindEvaluationResultConditionInput
  ) {
    createUserMindEvaluationResult(input: $input, condition: $condition) {
      id
      identity_sub
      mind_task_id
      state
      createdAt
      updatedAt
    }
  }
`;
export const updateUserMindEvaluationResult = /* GraphQL */ `
  mutation UpdateUserMindEvaluationResult(
    $input: UpdateUserMindEvaluationResultInput!
    $condition: ModelUserMindEvaluationResultConditionInput
  ) {
    updateUserMindEvaluationResult(input: $input, condition: $condition) {
      id
      identity_sub
      mind_task_id
      state
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserMindEvaluationResult = /* GraphQL */ `
  mutation DeleteUserMindEvaluationResult(
    $input: DeleteUserMindEvaluationResultInput!
    $condition: ModelUserMindEvaluationResultConditionInput
  ) {
    deleteUserMindEvaluationResult(input: $input, condition: $condition) {
      id
      identity_sub
      mind_task_id
      state
      createdAt
      updatedAt
    }
  }
`;
export const createUserMindPackageFeedback = /* GraphQL */ `
  mutation CreateUserMindPackageFeedback(
    $input: CreateUserMindPackageFeedbackInput!
    $condition: ModelUserMindPackageFeedbackConditionInput
  ) {
    createUserMindPackageFeedback(input: $input, condition: $condition) {
      id
      identity_sub
      package_id
      rating
      createdAt
      updatedAt
    }
  }
`;
export const updateUserMindPackageFeedback = /* GraphQL */ `
  mutation UpdateUserMindPackageFeedback(
    $input: UpdateUserMindPackageFeedbackInput!
    $condition: ModelUserMindPackageFeedbackConditionInput
  ) {
    updateUserMindPackageFeedback(input: $input, condition: $condition) {
      id
      identity_sub
      package_id
      rating
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserMindPackageFeedback = /* GraphQL */ `
  mutation DeleteUserMindPackageFeedback(
    $input: DeleteUserMindPackageFeedbackInput!
    $condition: ModelUserMindPackageFeedbackConditionInput
  ) {
    deleteUserMindPackageFeedback(input: $input, condition: $condition) {
      id
      identity_sub
      package_id
      rating
      createdAt
      updatedAt
    }
  }
`;
export const createUserAssignment = /* GraphQL */ `
  mutation CreateUserAssignment(
    $input: CreateUserAssignmentInput!
    $condition: ModelUserAssignmentConditionInput
  ) {
    createUserAssignment(input: $input, condition: $condition) {
      id
      successor_assignment {
        nextToken
      }
      identity_sub
      source_type
      predecessor_id
      predecessor_assignment {
        id
        identity_sub
        source_type
        predecessor_id
        result_id
        source_id
        completed_at
        started_at
        due_at
        created_by_client_id
        repetitions_done
        deleted_at
        createdAt
        updatedAt
      }
      result_id
      result {
        id
        identity_sub
        followup
        internal_comment
        evaluation_score_total
        user_screenshot
        evaluation_measurements
        feedback_texts
        status
        draft_approved_at
        draft_approved_by
        approved_at
        approved_by
        draft_at
        draft_by
        createdAt
        updatedAt
      }
      analysis_assets {
        nextToken
      }
      source_id
      completed_at
      started_at
      due_at
      created_by_client_id
      repetitions_done
      deleted_at
      createdAt
      updatedAt
    }
  }
`;
export const updateUserAssignment = /* GraphQL */ `
  mutation UpdateUserAssignment(
    $input: UpdateUserAssignmentInput!
    $condition: ModelUserAssignmentConditionInput
  ) {
    updateUserAssignment(input: $input, condition: $condition) {
      id
      successor_assignment {
        nextToken
      }
      identity_sub
      source_type
      predecessor_id
      predecessor_assignment {
        id
        identity_sub
        source_type
        predecessor_id
        result_id
        source_id
        completed_at
        started_at
        due_at
        created_by_client_id
        repetitions_done
        deleted_at
        createdAt
        updatedAt
      }
      result_id
      result {
        id
        identity_sub
        followup
        internal_comment
        evaluation_score_total
        user_screenshot
        evaluation_measurements
        feedback_texts
        status
        draft_approved_at
        draft_approved_by
        approved_at
        approved_by
        draft_at
        draft_by
        createdAt
        updatedAt
      }
      analysis_assets {
        nextToken
      }
      source_id
      completed_at
      started_at
      due_at
      created_by_client_id
      repetitions_done
      deleted_at
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserAssignment = /* GraphQL */ `
  mutation DeleteUserAssignment(
    $input: DeleteUserAssignmentInput!
    $condition: ModelUserAssignmentConditionInput
  ) {
    deleteUserAssignment(input: $input, condition: $condition) {
      id
      successor_assignment {
        nextToken
      }
      identity_sub
      source_type
      predecessor_id
      predecessor_assignment {
        id
        identity_sub
        source_type
        predecessor_id
        result_id
        source_id
        completed_at
        started_at
        due_at
        created_by_client_id
        repetitions_done
        deleted_at
        createdAt
        updatedAt
      }
      result_id
      result {
        id
        identity_sub
        followup
        internal_comment
        evaluation_score_total
        user_screenshot
        evaluation_measurements
        feedback_texts
        status
        draft_approved_at
        draft_approved_by
        approved_at
        approved_by
        draft_at
        draft_by
        createdAt
        updatedAt
      }
      analysis_assets {
        nextToken
      }
      source_id
      completed_at
      started_at
      due_at
      created_by_client_id
      repetitions_done
      deleted_at
      createdAt
      updatedAt
    }
  }
`;
export const createUserMovementAssignment = /* GraphQL */ `
  mutation CreateUserMovementAssignment(
    $input: CreateUserMovementAssignmentInput!
    $condition: ModelUserMovementAssignmentConditionInput
  ) {
    createUserMovementAssignment(input: $input, condition: $condition) {
      id
      successor_assignment {
        nextToken
      }
      identity_sub
      source_type
      predecessor_id
      predecessor_assignment {
        id
        identity_sub
        source_type
        predecessor_id
        source_id
        completed_at
        started_at
        due_at
        deleted_at
        createdAt
        updatedAt
      }
      source_id
      completed_at
      started_at
      due_at
      deleted_at
      createdAt
      updatedAt
    }
  }
`;
export const updateUserMovementAssignment = /* GraphQL */ `
  mutation UpdateUserMovementAssignment(
    $input: UpdateUserMovementAssignmentInput!
    $condition: ModelUserMovementAssignmentConditionInput
  ) {
    updateUserMovementAssignment(input: $input, condition: $condition) {
      id
      successor_assignment {
        nextToken
      }
      identity_sub
      source_type
      predecessor_id
      predecessor_assignment {
        id
        identity_sub
        source_type
        predecessor_id
        source_id
        completed_at
        started_at
        due_at
        deleted_at
        createdAt
        updatedAt
      }
      source_id
      completed_at
      started_at
      due_at
      deleted_at
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserMovementAssignment = /* GraphQL */ `
  mutation DeleteUserMovementAssignment(
    $input: DeleteUserMovementAssignmentInput!
    $condition: ModelUserMovementAssignmentConditionInput
  ) {
    deleteUserMovementAssignment(input: $input, condition: $condition) {
      id
      successor_assignment {
        nextToken
      }
      identity_sub
      source_type
      predecessor_id
      predecessor_assignment {
        id
        identity_sub
        source_type
        predecessor_id
        source_id
        completed_at
        started_at
        due_at
        deleted_at
        createdAt
        updatedAt
      }
      source_id
      completed_at
      started_at
      due_at
      deleted_at
      createdAt
      updatedAt
    }
  }
`;
export const createMovementTaskRating = /* GraphQL */ `
  mutation CreateMovementTaskRating(
    $input: CreateMovementTaskRatingInput!
    $condition: ModelMovementTaskRatingConditionInput
  ) {
    createMovementTaskRating(input: $input, condition: $condition) {
      id
      identity_sub
      movement_task_id
      rating
      createdAt
      updatedAt
    }
  }
`;
export const updateMovementTaskRating = /* GraphQL */ `
  mutation UpdateMovementTaskRating(
    $input: UpdateMovementTaskRatingInput!
    $condition: ModelMovementTaskRatingConditionInput
  ) {
    updateMovementTaskRating(input: $input, condition: $condition) {
      id
      identity_sub
      movement_task_id
      rating
      createdAt
      updatedAt
    }
  }
`;
export const deleteMovementTaskRating = /* GraphQL */ `
  mutation DeleteMovementTaskRating(
    $input: DeleteMovementTaskRatingInput!
    $condition: ModelMovementTaskRatingConditionInput
  ) {
    deleteMovementTaskRating(input: $input, condition: $condition) {
      id
      identity_sub
      movement_task_id
      rating
      createdAt
      updatedAt
    }
  }
`;
export const createUserMovementAnalysisResult = /* GraphQL */ `
  mutation CreateUserMovementAnalysisResult(
    $input: CreateUserMovementAnalysisResultInput!
    $condition: ModelUserMovementAnalysisResultConditionInput
  ) {
    createUserMovementAnalysisResult(input: $input, condition: $condition) {
      id
      identity_sub
      followup
      internal_comment
      user_assignments {
        nextToken
      }
      evaluation_score_total
      user_screenshot
      evaluation_measurements
      feedback_texts
      status
      draft_approved_at
      draft_approved_by
      approved_at
      approved_by
      draft_at
      draft_by
      createdAt
      updatedAt
    }
  }
`;
export const updateUserMovementAnalysisResult = /* GraphQL */ `
  mutation UpdateUserMovementAnalysisResult(
    $input: UpdateUserMovementAnalysisResultInput!
    $condition: ModelUserMovementAnalysisResultConditionInput
  ) {
    updateUserMovementAnalysisResult(input: $input, condition: $condition) {
      id
      identity_sub
      followup
      internal_comment
      user_assignments {
        nextToken
      }
      evaluation_score_total
      user_screenshot
      evaluation_measurements
      feedback_texts
      status
      draft_approved_at
      draft_approved_by
      approved_at
      approved_by
      draft_at
      draft_by
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserMovementAnalysisResult = /* GraphQL */ `
  mutation DeleteUserMovementAnalysisResult(
    $input: DeleteUserMovementAnalysisResultInput!
    $condition: ModelUserMovementAnalysisResultConditionInput
  ) {
    deleteUserMovementAnalysisResult(input: $input, condition: $condition) {
      id
      identity_sub
      followup
      internal_comment
      user_assignments {
        nextToken
      }
      evaluation_score_total
      user_screenshot
      evaluation_measurements
      feedback_texts
      status
      draft_approved_at
      draft_approved_by
      approved_at
      approved_by
      draft_at
      draft_by
      createdAt
      updatedAt
    }
  }
`;
export const createUserMovementAnalysisAsset = /* GraphQL */ `
  mutation CreateUserMovementAnalysisAsset(
    $input: CreateUserMovementAnalysisAssetInput!
    $condition: ModelUserMovementAnalysisAssetConditionInput
  ) {
    createUserMovementAnalysisAsset(input: $input, condition: $condition) {
      id
      identity_sub
      user_assignment_id
      user_assignment {
        id
        identity_sub
        source_type
        predecessor_id
        result_id
        source_id
        completed_at
        started_at
        due_at
        created_by_client_id
        repetitions_done
        deleted_at
        createdAt
        updatedAt
      }
      type
      src_file
      createdAt
      updatedAt
    }
  }
`;
export const updateUserMovementAnalysisAsset = /* GraphQL */ `
  mutation UpdateUserMovementAnalysisAsset(
    $input: UpdateUserMovementAnalysisAssetInput!
    $condition: ModelUserMovementAnalysisAssetConditionInput
  ) {
    updateUserMovementAnalysisAsset(input: $input, condition: $condition) {
      id
      identity_sub
      user_assignment_id
      user_assignment {
        id
        identity_sub
        source_type
        predecessor_id
        result_id
        source_id
        completed_at
        started_at
        due_at
        created_by_client_id
        repetitions_done
        deleted_at
        createdAt
        updatedAt
      }
      type
      src_file
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserMovementAnalysisAsset = /* GraphQL */ `
  mutation DeleteUserMovementAnalysisAsset(
    $input: DeleteUserMovementAnalysisAssetInput!
    $condition: ModelUserMovementAnalysisAssetConditionInput
  ) {
    deleteUserMovementAnalysisAsset(input: $input, condition: $condition) {
      id
      identity_sub
      user_assignment_id
      user_assignment {
        id
        identity_sub
        source_type
        predecessor_id
        result_id
        source_id
        completed_at
        started_at
        due_at
        created_by_client_id
        repetitions_done
        deleted_at
        createdAt
        updatedAt
      }
      type
      src_file
      createdAt
      updatedAt
    }
  }
`;
export const createDeletedUser = /* GraphQL */ `
  mutation CreateDeletedUser(
    $input: CreateDeletedUserInput!
    $condition: ModelDeletedUserConditionInput
  ) {
    createDeletedUser(input: $input, condition: $condition) {
      id
      email
      original_user_id
      tenant_id
      license_id
      username
      request_received_at
      identity_deleted_at
      braze_profile_deleted_at
      crisp_profile_deleted_at
      completed_by
      completed_at
      createdAt
      updatedAt
    }
  }
`;
export const updateDeletedUser = /* GraphQL */ `
  mutation UpdateDeletedUser(
    $input: UpdateDeletedUserInput!
    $condition: ModelDeletedUserConditionInput
  ) {
    updateDeletedUser(input: $input, condition: $condition) {
      id
      email
      original_user_id
      tenant_id
      license_id
      username
      request_received_at
      identity_deleted_at
      braze_profile_deleted_at
      crisp_profile_deleted_at
      completed_by
      completed_at
      createdAt
      updatedAt
    }
  }
`;
export const deleteDeletedUser = /* GraphQL */ `
  mutation DeleteDeletedUser(
    $input: DeleteDeletedUserInput!
    $condition: ModelDeletedUserConditionInput
  ) {
    deleteDeletedUser(input: $input, condition: $condition) {
      id
      email
      original_user_id
      tenant_id
      license_id
      username
      request_received_at
      identity_deleted_at
      braze_profile_deleted_at
      crisp_profile_deleted_at
      completed_by
      completed_at
      createdAt
      updatedAt
    }
  }
`;
export const createManagement = /* GraphQL */ `
  mutation CreateManagement(
    $input: CreateManagementInput!
    $condition: ModelManagementConditionInput
  ) {
    createManagement(input: $input, condition: $condition) {
      id
      index
      createdAt
      updatedAt
    }
  }
`;
export const updateManagement = /* GraphQL */ `
  mutation UpdateManagement(
    $input: UpdateManagementInput!
    $condition: ModelManagementConditionInput
  ) {
    updateManagement(input: $input, condition: $condition) {
      id
      index
      createdAt
      updatedAt
    }
  }
`;
export const deleteManagement = /* GraphQL */ `
  mutation DeleteManagement(
    $input: DeleteManagementInput!
    $condition: ModelManagementConditionInput
  ) {
    deleteManagement(input: $input, condition: $condition) {
      id
      index
      createdAt
      updatedAt
    }
  }
`;
export const createAuditLog = /* GraphQL */ `
  mutation CreateAuditLog(
    $input: CreateAuditLogInput!
    $condition: ModelAuditLogConditionInput
  ) {
    createAuditLog(input: $input, condition: $condition) {
      id
      time
      typeName
      fieldName
      arguments
      userSub
      userId
      clientId
      ip
      sourceDevice
      origin
      createdAt
      updatedAt
    }
  }
`;
export const updateAuditLog = /* GraphQL */ `
  mutation UpdateAuditLog(
    $input: UpdateAuditLogInput!
    $condition: ModelAuditLogConditionInput
  ) {
    updateAuditLog(input: $input, condition: $condition) {
      id
      time
      typeName
      fieldName
      arguments
      userSub
      userId
      clientId
      ip
      sourceDevice
      origin
      createdAt
      updatedAt
    }
  }
`;
export const deleteAuditLog = /* GraphQL */ `
  mutation DeleteAuditLog(
    $input: DeleteAuditLogInput!
    $condition: ModelAuditLogConditionInput
  ) {
    deleteAuditLog(input: $input, condition: $condition) {
      id
      time
      typeName
      fieldName
      arguments
      userSub
      userId
      clientId
      ip
      sourceDevice
      origin
      createdAt
      updatedAt
    }
  }
`;
export const createClientConfiguration = /* GraphQL */ `
  mutation CreateClientConfiguration(
    $input: CreateClientConfigurationInput!
    $condition: ModelClientConfigurationConditionInput
  ) {
    createClientConfiguration(input: $input, condition: $condition) {
      id
      minimum_version
      valid_from
      valid_to
      configured_by
      createdAt
      updatedAt
    }
  }
`;
export const updateClientConfiguration = /* GraphQL */ `
  mutation UpdateClientConfiguration(
    $input: UpdateClientConfigurationInput!
    $condition: ModelClientConfigurationConditionInput
  ) {
    updateClientConfiguration(input: $input, condition: $condition) {
      id
      minimum_version
      valid_from
      valid_to
      configured_by
      createdAt
      updatedAt
    }
  }
`;
export const deleteClientConfiguration = /* GraphQL */ `
  mutation DeleteClientConfiguration(
    $input: DeleteClientConfigurationInput!
    $condition: ModelClientConfigurationConditionInput
  ) {
    deleteClientConfiguration(input: $input, condition: $condition) {
      id
      minimum_version
      valid_from
      valid_to
      configured_by
      createdAt
      updatedAt
    }
  }
`;
