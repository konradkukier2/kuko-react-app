/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserAssignments = /* GraphQL */ `
  query GetUserAssignments($userId: String, $userSub: String, $locale: String) {
    getUserAssignments(userId: $userId, userSub: $userSub, locale: $locale)
  }
`;
export const getUserMovementAssignments = /* GraphQL */ `
  query GetUserMovementAssignments(
    $userId: String
    $userSub: String
    $locale: String
  ) {
    getUserMovementAssignments(
      userId: $userId
      userSub: $userSub
      locale: $locale
    )
  }
`;
export const getUserMindProgressFn = /* GraphQL */ `
  query GetUserMindProgressFn(
    $userId: String
    $userSub: String
    $locale: String
  ) {
    getUserMindProgressFn(userId: $userId, userSub: $userSub, locale: $locale)
  }
`;
export const presignedFileUrl = /* GraphQL */ `
  query PresignedFileUrl($path: String!) {
    presignedFileUrl(path: $path)
  }
`;
export const getTenant = /* GraphQL */ `
  query GetTenant($id: ID!) {
    getTenant(id: $id) {
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
export const listTenants = /* GraphQL */ `
  query ListTenants(
    $filter: ModelTenantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTenants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        name
        email_domains
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTenantBookedMindPackage = /* GraphQL */ `
  query GetTenantBookedMindPackage($id: ID!) {
    getTenantBookedMindPackage(id: $id) {
      id
      tenant_id
      package_id
      createdAt
      updatedAt
    }
  }
`;
export const listTenantBookedMindPackages = /* GraphQL */ `
  query ListTenantBookedMindPackages(
    $filter: ModelTenantBookedMindPackageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTenantBookedMindPackages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenant_id
        package_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTenantBookedTrainingModule = /* GraphQL */ `
  query GetTenantBookedTrainingModule($id: ID!) {
    getTenantBookedTrainingModule(id: $id) {
      id
      tenant_id
      module_id
      with_analyse
      createdAt
      updatedAt
    }
  }
`;
export const listTenantBookedTrainingModules = /* GraphQL */ `
  query ListTenantBookedTrainingModules(
    $filter: ModelTenantBookedTrainingModuleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTenantBookedTrainingModules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenant_id
        module_id
        with_analyse
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLicense = /* GraphQL */ `
  query GetLicense($id: ID!) {
    getLicense(id: $id) {
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
export const listLicenses = /* GraphQL */ `
  query ListLicenses(
    $filter: ModelLicenseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLicenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        tenant_id
        identity_sub
        user
        validTo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRegistrationCode = /* GraphQL */ `
  query GetRegistrationCode($id: ID!) {
    getRegistrationCode(id: $id) {
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
export const listRegistrationCodes = /* GraphQL */ `
  query ListRegistrationCodes(
    $filter: ModelRegistrationCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegistrationCodes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        code
        tenant_id
        identity_sub
        license_id
        used_at
        valid_to
        reserved_at
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getJobTenant = /* GraphQL */ `
  query GetJobTenant($id: ID!) {
    getJobTenant(id: $id) {
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
export const listJobTenants = /* GraphQL */ `
  query ListJobTenants(
    $filter: ModelJobTenantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobTenants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        job_id
        tenant_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAnamnese = /* GraphQL */ `
  query GetAnamnese($id: ID!) {
    getAnamnese(id: $id) {
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
export const listAnamneses = /* GraphQL */ `
  query ListAnamneses(
    $filter: ModelAnamneseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnamneses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserMindProgress = /* GraphQL */ `
  query GetUserMindProgress($id: ID!) {
    getUserMindProgress(id: $id) {
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
export const listUserMindProgresss = /* GraphQL */ `
  query ListUserMindProgresss(
    $filter: ModelUserMindProgressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserMindProgresss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        identity_sub
        source_id
        source_type
        result_id
        completed_at
        started_at
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserMindEvaluationResult = /* GraphQL */ `
  query GetUserMindEvaluationResult($id: ID!) {
    getUserMindEvaluationResult(id: $id) {
      id
      identity_sub
      mind_task_id
      state
      createdAt
      updatedAt
    }
  }
`;
export const listUserMindEvaluationResults = /* GraphQL */ `
  query ListUserMindEvaluationResults(
    $filter: ModelUserMindEvaluationResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserMindEvaluationResults(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        identity_sub
        mind_task_id
        state
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserMindPackageFeedback = /* GraphQL */ `
  query GetUserMindPackageFeedback($id: ID!) {
    getUserMindPackageFeedback(id: $id) {
      id
      identity_sub
      package_id
      rating
      createdAt
      updatedAt
    }
  }
`;
export const listUserMindPackageFeedbacks = /* GraphQL */ `
  query ListUserMindPackageFeedbacks(
    $filter: ModelUserMindPackageFeedbackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserMindPackageFeedbacks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        identity_sub
        package_id
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserAssignment = /* GraphQL */ `
  query GetUserAssignment($id: ID!) {
    getUserAssignment(id: $id) {
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
export const listUserAssignments = /* GraphQL */ `
  query ListUserAssignments(
    $filter: ModelUserAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserAssignments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserMovementAssignment = /* GraphQL */ `
  query GetUserMovementAssignment($id: ID!) {
    getUserMovementAssignment(id: $id) {
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
export const listUserMovementAssignments = /* GraphQL */ `
  query ListUserMovementAssignments(
    $filter: ModelUserMovementAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserMovementAssignments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getMovementTaskRating = /* GraphQL */ `
  query GetMovementTaskRating($id: ID!) {
    getMovementTaskRating(id: $id) {
      id
      identity_sub
      movement_task_id
      rating
      createdAt
      updatedAt
    }
  }
`;
export const listMovementTaskRatings = /* GraphQL */ `
  query ListMovementTaskRatings(
    $filter: ModelMovementTaskRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMovementTaskRatings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        identity_sub
        movement_task_id
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserMovementAnalysisResult = /* GraphQL */ `
  query GetUserMovementAnalysisResult($id: ID!) {
    getUserMovementAnalysisResult(id: $id) {
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
export const listUserMovementAnalysisResults = /* GraphQL */ `
  query ListUserMovementAnalysisResults(
    $filter: ModelUserMovementAnalysisResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserMovementAnalysisResults(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getUserMovementAnalysisAsset = /* GraphQL */ `
  query GetUserMovementAnalysisAsset($id: ID!) {
    getUserMovementAnalysisAsset(id: $id) {
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
export const listUserMovementAnalysisAssets = /* GraphQL */ `
  query ListUserMovementAnalysisAssets(
    $filter: ModelUserMovementAnalysisAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserMovementAnalysisAssets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        identity_sub
        user_assignment_id
        type
        src_file
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDeletedUser = /* GraphQL */ `
  query GetDeletedUser($id: ID!) {
    getDeletedUser(id: $id) {
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
export const listDeletedUsers = /* GraphQL */ `
  query ListDeletedUsers(
    $filter: ModelDeletedUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeletedUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getManagement = /* GraphQL */ `
  query GetManagement($id: ID!) {
    getManagement(id: $id) {
      id
      index
      createdAt
      updatedAt
    }
  }
`;
export const listManagements = /* GraphQL */ `
  query ListManagements(
    $filter: ModelManagementFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManagements(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        index
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAuditLog = /* GraphQL */ `
  query GetAuditLog($id: ID!) {
    getAuditLog(id: $id) {
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
export const listAuditLogs = /* GraphQL */ `
  query ListAuditLogs(
    $filter: ModelAuditLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuditLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const listTenantsByName = /* GraphQL */ `
  query ListTenantsByName(
    $type: TenantType
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTenantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTenantsByName(
      type: $type
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        name
        email_domains
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const tenantBookedMindPackageByTenant = /* GraphQL */ `
  query TenantBookedMindPackageByTenant(
    $tenant_id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelTenantBookedMindPackageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tenantBookedMindPackageByTenant(
      tenant_id: $tenant_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenant_id
        package_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const tenantBookedTrainingModuleByTenant = /* GraphQL */ `
  query TenantBookedTrainingModuleByTenant(
    $tenant_id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelTenantBookedTrainingModuleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tenantBookedTrainingModuleByTenant(
      tenant_id: $tenant_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        tenant_id
        module_id
        with_analyse
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listLicensesByTenant = /* GraphQL */ `
  query ListLicensesByTenant(
    $tenant_id: ID
    $validToIdentity_sub: ModelLicenseByTenantCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLicenseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLicensesByTenant(
      tenant_id: $tenant_id
      validToIdentity_sub: $validToIdentity_sub
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        tenant_id
        identity_sub
        user
        validTo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listLicensesByByUser = /* GraphQL */ `
  query ListLicensesByByUser(
    $identity_sub: ID
    $sortDirection: ModelSortDirection
    $filter: ModelLicenseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLicensesByByUser(
      identity_sub: $identity_sub
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        tenant_id
        identity_sub
        user
        validTo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listLicensesByValidTo = /* GraphQL */ `
  query ListLicensesByValidTo(
    $type: LicenseType
    $validTo: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLicenseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLicensesByValidTo(
      type: $type
      validTo: $validTo
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        tenant_id
        identity_sub
        user
        validTo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listRegistrationCodesByTenant = /* GraphQL */ `
  query ListRegistrationCodesByTenant(
    $tenant_id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelRegistrationCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegistrationCodesByTenant(
      tenant_id: $tenant_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        code
        tenant_id
        identity_sub
        license_id
        used_at
        valid_to
        reserved_at
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listRegistrationCodesByCode = /* GraphQL */ `
  query ListRegistrationCodesByCode(
    $code: String
    $sortDirection: ModelSortDirection
    $filter: ModelRegistrationCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegistrationCodesByCode(
      code: $code
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        code
        tenant_id
        identity_sub
        license_id
        used_at
        valid_to
        reserved_at
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listRegistrationCodesByTenantUsedAt = /* GraphQL */ `
  query ListRegistrationCodesByTenantUsedAt(
    $tenant_id: ID
    $used_at: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRegistrationCodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegistrationCodesByTenantUsedAt(
      tenant_id: $tenant_id
      used_at: $used_at
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        code
        tenant_id
        identity_sub
        license_id
        used_at
        valid_to
        reserved_at
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const anamneseByUser = /* GraphQL */ `
  query AnamneseByUser(
    $identity_sub: ID
    $sortDirection: ModelSortDirection
    $filter: ModelAnamneseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    anamneseByUser(
      identity_sub: $identity_sub
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const mindProgressByUser = /* GraphQL */ `
  query MindProgressByUser(
    $identity_sub: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserMindProgressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    mindProgressByUser(
      identity_sub: $identity_sub
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        identity_sub
        source_id
        source_type
        result_id
        completed_at
        started_at
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const evaluationResultByMindTask = /* GraphQL */ `
  query EvaluationResultByMindTask(
    $mind_task_id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserMindEvaluationResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    evaluationResultByMindTask(
      mind_task_id: $mind_task_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        identity_sub
        mind_task_id
        state
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const feedbackByPackage = /* GraphQL */ `
  query FeedbackByPackage(
    $package_id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserMindPackageFeedbackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    feedbackByPackage(
      package_id: $package_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        identity_sub
        package_id
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const assignmentByUser = /* GraphQL */ `
  query AssignmentByUser(
    $identity_sub: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assignmentByUser(
      identity_sub: $identity_sub
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const assignmentByPredecessor = /* GraphQL */ `
  query AssignmentByPredecessor(
    $predecessor_id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assignmentByPredecessor(
      predecessor_id: $predecessor_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const movementAssignmentByUser = /* GraphQL */ `
  query MovementAssignmentByUser(
    $identity_sub: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserMovementAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    movementAssignmentByUser(
      identity_sub: $identity_sub
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const movementAssignmentByPredecessor = /* GraphQL */ `
  query MovementAssignmentByPredecessor(
    $predecessor_id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserMovementAssignmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    movementAssignmentByPredecessor(
      predecessor_id: $predecessor_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const ratingByUser = /* GraphQL */ `
  query RatingByUser(
    $identity_sub: ID
    $sortDirection: ModelSortDirection
    $filter: ModelMovementTaskRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingByUser(
      identity_sub: $identity_sub
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        identity_sub
        movement_task_id
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ratingByTask = /* GraphQL */ `
  query RatingByTask(
    $movement_task_id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelMovementTaskRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingByTask(
      movement_task_id: $movement_task_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        identity_sub
        movement_task_id
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ratingByRate = /* GraphQL */ `
  query RatingByRate(
    $rating: Float
    $sortDirection: ModelSortDirection
    $filter: ModelMovementTaskRatingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingByRate(
      rating: $rating
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        identity_sub
        movement_task_id
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const movementAnalysisResultByUser = /* GraphQL */ `
  query MovementAnalysisResultByUser(
    $identity_sub: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserMovementAnalysisResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    movementAnalysisResultByUser(
      identity_sub: $identity_sub
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const movementAnalysisAssetByUser = /* GraphQL */ `
  query MovementAnalysisAssetByUser(
    $identity_sub: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserMovementAnalysisAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    movementAnalysisAssetByUser(
      identity_sub: $identity_sub
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        identity_sub
        user_assignment_id
        type
        src_file
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const movementAnalysisAssetByAssignment = /* GraphQL */ `
  query MovementAnalysisAssetByAssignment(
    $user_assignment_id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserMovementAnalysisAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    movementAnalysisAssetByAssignment(
      user_assignment_id: $user_assignment_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        identity_sub
        user_assignment_id
        type
        src_file
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserMapping = /* GraphQL */ `
  query GetUserMapping($id: ID!) {
    getUserMapping(id: $id) {
      id
      custom_user_id
      identity_sub
      createdAt
      updatedAt
    }
  }
`;
export const listUserMappings = /* GraphQL */ `
  query ListUserMappings(
    $filter: ModelUserMappingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserMappings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        custom_user_id
        identity_sub
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listUserMappingsByCustomUserId = /* GraphQL */ `
  query ListUserMappingsByCustomUserId(
    $custom_user_id: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserMappingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserMappingsByCustomUserId(
      custom_user_id: $custom_user_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        custom_user_id
        identity_sub
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listUserMappingsByIdentitySub = /* GraphQL */ `
  query ListUserMappingsByIdentitySub(
    $identity_sub: ID
    $sortDirection: ModelSortDirection
    $filter: ModelUserMappingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserMappingsByIdentitySub(
      identity_sub: $identity_sub
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        custom_user_id
        identity_sub
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCrispSession = /* GraphQL */ `
  query GetCrispSession($id: ID!) {
    getCrispSession(id: $id) {
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
export const listCrispSessions = /* GraphQL */ `
  query ListCrispSessions(
    $filter: ModelCrispSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCrispSessions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        identity_sub
        crisp_session_id
        push_endpoint_id
        platform
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const crispSessionBySessionId = /* GraphQL */ `
  query CrispSessionBySessionId(
    $crisp_session_id: String
    $sortDirection: ModelSortDirection
    $filter: ModelCrispSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    crispSessionBySessionId(
      crisp_session_id: $crisp_session_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        identity_sub
        crisp_session_id
        push_endpoint_id
        platform
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const crispSessionByPushEndpointId = /* GraphQL */ `
  query CrispSessionByPushEndpointId(
    $push_endpoint_id: String
    $sortDirection: ModelSortDirection
    $filter: ModelCrispSessionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    crispSessionByPushEndpointId(
      push_endpoint_id: $push_endpoint_id
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        identity_sub
        crisp_session_id
        push_endpoint_id
        platform
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
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
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getClientConfiguration = /* GraphQL */ `
  query GetClientConfiguration($id: ID!) {
    getClientConfiguration(id: $id) {
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
export const listClientConfigurations = /* GraphQL */ `
  query ListClientConfigurations(
    $filter: ModelClientConfigurationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientConfigurations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        minimum_version
        valid_from
        valid_to
        configured_by
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const verifyRegistrationCode = /* GraphQL */ `
  query VerifyRegistrationCode($registrationCode: String) {
    verifyRegistrationCode(registrationCode: $registrationCode)
  }
`;
export const sendEmailVerification = /* GraphQL */ `
  query SendEmailVerification(
    $userId: String!
    $email: AWSEmail!
    $userSub: String!
  ) {
    sendEmailVerification(userId: $userId, email: $email, userSub: $userSub)
  }
`;
export const sendDeleteUserRequest = /* GraphQL */ `
  query SendDeleteUserRequest(
    $userId: String!
    $email: AWSEmail!
    $userSub: String!
    $serviceEmail: AWSEmail!
  ) {
    sendDeleteUserRequest(
      userId: $userId
      email: $email
      userSub: $userSub
      serviceEmail: $serviceEmail
    )
  }
`;
