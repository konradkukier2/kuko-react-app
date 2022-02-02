/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateOrDeleteUserMovementAnalysisResultByUser = /* GraphQL */ `
  subscription OnCreateOrDeleteUserMovementAnalysisResultByUser(
    $identity_sub: String!
  ) {
    onCreateOrDeleteUserMovementAnalysisResultByUser(
      identity_sub: $identity_sub
    ) {
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
export const onCreateTenant = /* GraphQL */ `
  subscription OnCreateTenant {
    onCreateTenant {
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
export const onUpdateTenant = /* GraphQL */ `
  subscription OnUpdateTenant {
    onUpdateTenant {
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
export const onDeleteTenant = /* GraphQL */ `
  subscription OnDeleteTenant {
    onDeleteTenant {
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
export const onCreateTenantBookedMindPackage = /* GraphQL */ `
  subscription OnCreateTenantBookedMindPackage {
    onCreateTenantBookedMindPackage {
      id
      tenant_id
      package_id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTenantBookedMindPackage = /* GraphQL */ `
  subscription OnUpdateTenantBookedMindPackage {
    onUpdateTenantBookedMindPackage {
      id
      tenant_id
      package_id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTenantBookedMindPackage = /* GraphQL */ `
  subscription OnDeleteTenantBookedMindPackage {
    onDeleteTenantBookedMindPackage {
      id
      tenant_id
      package_id
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTenantBookedTrainingModule = /* GraphQL */ `
  subscription OnCreateTenantBookedTrainingModule {
    onCreateTenantBookedTrainingModule {
      id
      tenant_id
      module_id
      with_analyse
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTenantBookedTrainingModule = /* GraphQL */ `
  subscription OnUpdateTenantBookedTrainingModule {
    onUpdateTenantBookedTrainingModule {
      id
      tenant_id
      module_id
      with_analyse
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTenantBookedTrainingModule = /* GraphQL */ `
  subscription OnDeleteTenantBookedTrainingModule {
    onDeleteTenantBookedTrainingModule {
      id
      tenant_id
      module_id
      with_analyse
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLicense = /* GraphQL */ `
  subscription OnCreateLicense($identity_sub: String) {
    onCreateLicense(identity_sub: $identity_sub) {
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
export const onUpdateLicense = /* GraphQL */ `
  subscription OnUpdateLicense($identity_sub: String) {
    onUpdateLicense(identity_sub: $identity_sub) {
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
export const onDeleteLicense = /* GraphQL */ `
  subscription OnDeleteLicense($identity_sub: String) {
    onDeleteLicense(identity_sub: $identity_sub) {
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
export const onCreateRegistrationCode = /* GraphQL */ `
  subscription OnCreateRegistrationCode {
    onCreateRegistrationCode {
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
export const onUpdateRegistrationCode = /* GraphQL */ `
  subscription OnUpdateRegistrationCode {
    onUpdateRegistrationCode {
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
export const onDeleteRegistrationCode = /* GraphQL */ `
  subscription OnDeleteRegistrationCode {
    onDeleteRegistrationCode {
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
export const onCreateJobTenant = /* GraphQL */ `
  subscription OnCreateJobTenant {
    onCreateJobTenant {
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
export const onUpdateJobTenant = /* GraphQL */ `
  subscription OnUpdateJobTenant {
    onUpdateJobTenant {
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
export const onDeleteJobTenant = /* GraphQL */ `
  subscription OnDeleteJobTenant {
    onDeleteJobTenant {
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
export const onCreateAnamnese = /* GraphQL */ `
  subscription OnCreateAnamnese($identity_sub: String) {
    onCreateAnamnese(identity_sub: $identity_sub) {
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
export const onUpdateAnamnese = /* GraphQL */ `
  subscription OnUpdateAnamnese($identity_sub: String) {
    onUpdateAnamnese(identity_sub: $identity_sub) {
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
export const onDeleteAnamnese = /* GraphQL */ `
  subscription OnDeleteAnamnese($identity_sub: String) {
    onDeleteAnamnese(identity_sub: $identity_sub) {
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
export const onCreateUserMindProgress = /* GraphQL */ `
  subscription OnCreateUserMindProgress($identity_sub: String) {
    onCreateUserMindProgress(identity_sub: $identity_sub) {
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
export const onUpdateUserMindProgress = /* GraphQL */ `
  subscription OnUpdateUserMindProgress($identity_sub: String) {
    onUpdateUserMindProgress(identity_sub: $identity_sub) {
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
export const onDeleteUserMindProgress = /* GraphQL */ `
  subscription OnDeleteUserMindProgress($identity_sub: String) {
    onDeleteUserMindProgress(identity_sub: $identity_sub) {
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
export const onCreateUserMindEvaluationResult = /* GraphQL */ `
  subscription OnCreateUserMindEvaluationResult($identity_sub: String) {
    onCreateUserMindEvaluationResult(identity_sub: $identity_sub) {
      id
      identity_sub
      mind_task_id
      state
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserMindEvaluationResult = /* GraphQL */ `
  subscription OnUpdateUserMindEvaluationResult($identity_sub: String) {
    onUpdateUserMindEvaluationResult(identity_sub: $identity_sub) {
      id
      identity_sub
      mind_task_id
      state
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserMindEvaluationResult = /* GraphQL */ `
  subscription OnDeleteUserMindEvaluationResult($identity_sub: String) {
    onDeleteUserMindEvaluationResult(identity_sub: $identity_sub) {
      id
      identity_sub
      mind_task_id
      state
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserMindPackageFeedback = /* GraphQL */ `
  subscription OnCreateUserMindPackageFeedback($identity_sub: String) {
    onCreateUserMindPackageFeedback(identity_sub: $identity_sub) {
      id
      identity_sub
      package_id
      rating
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserMindPackageFeedback = /* GraphQL */ `
  subscription OnUpdateUserMindPackageFeedback($identity_sub: String) {
    onUpdateUserMindPackageFeedback(identity_sub: $identity_sub) {
      id
      identity_sub
      package_id
      rating
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserMindPackageFeedback = /* GraphQL */ `
  subscription OnDeleteUserMindPackageFeedback($identity_sub: String) {
    onDeleteUserMindPackageFeedback(identity_sub: $identity_sub) {
      id
      identity_sub
      package_id
      rating
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserAssignment = /* GraphQL */ `
  subscription OnCreateUserAssignment($identity_sub: String) {
    onCreateUserAssignment(identity_sub: $identity_sub) {
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
export const onUpdateUserAssignment = /* GraphQL */ `
  subscription OnUpdateUserAssignment($identity_sub: String) {
    onUpdateUserAssignment(identity_sub: $identity_sub) {
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
export const onDeleteUserAssignment = /* GraphQL */ `
  subscription OnDeleteUserAssignment($identity_sub: String) {
    onDeleteUserAssignment(identity_sub: $identity_sub) {
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
export const onCreateUserMovementAssignment = /* GraphQL */ `
  subscription OnCreateUserMovementAssignment($identity_sub: String) {
    onCreateUserMovementAssignment(identity_sub: $identity_sub) {
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
export const onUpdateUserMovementAssignment = /* GraphQL */ `
  subscription OnUpdateUserMovementAssignment($identity_sub: String) {
    onUpdateUserMovementAssignment(identity_sub: $identity_sub) {
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
export const onDeleteUserMovementAssignment = /* GraphQL */ `
  subscription OnDeleteUserMovementAssignment($identity_sub: String) {
    onDeleteUserMovementAssignment(identity_sub: $identity_sub) {
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
export const onCreateMovementTaskRating = /* GraphQL */ `
  subscription OnCreateMovementTaskRating($identity_sub: String) {
    onCreateMovementTaskRating(identity_sub: $identity_sub) {
      id
      identity_sub
      movement_task_id
      rating
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMovementTaskRating = /* GraphQL */ `
  subscription OnUpdateMovementTaskRating($identity_sub: String) {
    onUpdateMovementTaskRating(identity_sub: $identity_sub) {
      id
      identity_sub
      movement_task_id
      rating
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMovementTaskRating = /* GraphQL */ `
  subscription OnDeleteMovementTaskRating($identity_sub: String) {
    onDeleteMovementTaskRating(identity_sub: $identity_sub) {
      id
      identity_sub
      movement_task_id
      rating
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserMovementAnalysisResult = /* GraphQL */ `
  subscription OnCreateUserMovementAnalysisResult($identity_sub: String) {
    onCreateUserMovementAnalysisResult(identity_sub: $identity_sub) {
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
export const onUpdateUserMovementAnalysisResult = /* GraphQL */ `
  subscription OnUpdateUserMovementAnalysisResult($identity_sub: String) {
    onUpdateUserMovementAnalysisResult(identity_sub: $identity_sub) {
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
export const onDeleteUserMovementAnalysisResult = /* GraphQL */ `
  subscription OnDeleteUserMovementAnalysisResult($identity_sub: String) {
    onDeleteUserMovementAnalysisResult(identity_sub: $identity_sub) {
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
export const onCreateUserMovementAnalysisAsset = /* GraphQL */ `
  subscription OnCreateUserMovementAnalysisAsset($identity_sub: String) {
    onCreateUserMovementAnalysisAsset(identity_sub: $identity_sub) {
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
export const onUpdateUserMovementAnalysisAsset = /* GraphQL */ `
  subscription OnUpdateUserMovementAnalysisAsset($identity_sub: String) {
    onUpdateUserMovementAnalysisAsset(identity_sub: $identity_sub) {
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
export const onDeleteUserMovementAnalysisAsset = /* GraphQL */ `
  subscription OnDeleteUserMovementAnalysisAsset($identity_sub: String) {
    onDeleteUserMovementAnalysisAsset(identity_sub: $identity_sub) {
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
export const onCreateDeletedUser = /* GraphQL */ `
  subscription OnCreateDeletedUser {
    onCreateDeletedUser {
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
export const onUpdateDeletedUser = /* GraphQL */ `
  subscription OnUpdateDeletedUser {
    onUpdateDeletedUser {
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
export const onDeleteDeletedUser = /* GraphQL */ `
  subscription OnDeleteDeletedUser {
    onDeleteDeletedUser {
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
export const onCreateManagement = /* GraphQL */ `
  subscription OnCreateManagement {
    onCreateManagement {
      id
      index
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateManagement = /* GraphQL */ `
  subscription OnUpdateManagement {
    onUpdateManagement {
      id
      index
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteManagement = /* GraphQL */ `
  subscription OnDeleteManagement {
    onDeleteManagement {
      id
      index
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAuditLog = /* GraphQL */ `
  subscription OnCreateAuditLog {
    onCreateAuditLog {
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
export const onUpdateAuditLog = /* GraphQL */ `
  subscription OnUpdateAuditLog {
    onUpdateAuditLog {
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
export const onDeleteAuditLog = /* GraphQL */ `
  subscription OnDeleteAuditLog {
    onDeleteAuditLog {
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
export const onCreateUserMapping = /* GraphQL */ `
  subscription OnCreateUserMapping($custom_user_id: String) {
    onCreateUserMapping(custom_user_id: $custom_user_id) {
      id
      custom_user_id
      identity_sub
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserMapping = /* GraphQL */ `
  subscription OnUpdateUserMapping($custom_user_id: String) {
    onUpdateUserMapping(custom_user_id: $custom_user_id) {
      id
      custom_user_id
      identity_sub
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserMapping = /* GraphQL */ `
  subscription OnDeleteUserMapping($custom_user_id: String) {
    onDeleteUserMapping(custom_user_id: $custom_user_id) {
      id
      custom_user_id
      identity_sub
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCrispSession = /* GraphQL */ `
  subscription OnCreateCrispSession($identity_sub: String) {
    onCreateCrispSession(identity_sub: $identity_sub) {
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
export const onUpdateCrispSession = /* GraphQL */ `
  subscription OnUpdateCrispSession($identity_sub: String) {
    onUpdateCrispSession(identity_sub: $identity_sub) {
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
export const onDeleteCrispSession = /* GraphQL */ `
  subscription OnDeleteCrispSession($identity_sub: String) {
    onDeleteCrispSession(identity_sub: $identity_sub) {
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
export const onCreateJob = /* GraphQL */ `
  subscription OnCreateJob {
    onCreateJob {
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
export const onUpdateJob = /* GraphQL */ `
  subscription OnUpdateJob {
    onUpdateJob {
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
export const onDeleteJob = /* GraphQL */ `
  subscription OnDeleteJob {
    onDeleteJob {
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
export const onCreateClientConfiguration = /* GraphQL */ `
  subscription OnCreateClientConfiguration {
    onCreateClientConfiguration {
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
export const onUpdateClientConfiguration = /* GraphQL */ `
  subscription OnUpdateClientConfiguration {
    onUpdateClientConfiguration {
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
export const onDeleteClientConfiguration = /* GraphQL */ `
  subscription OnDeleteClientConfiguration {
    onDeleteClientConfiguration {
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
