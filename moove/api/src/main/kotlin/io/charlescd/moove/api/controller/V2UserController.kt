/*
 * Copyright 2020 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package io.charlescd.moove.api.controller

import io.charlescd.moove.application.ResourcePageResponse
import io.charlescd.moove.application.user.*
import io.charlescd.moove.application.user.request.ChangeUserPasswordRequest
import io.charlescd.moove.application.user.request.CreateUserRequest
import io.charlescd.moove.application.user.request.PatchUserRequest
import io.charlescd.moove.application.user.response.UserResponse
import io.charlescd.moove.domain.PageRequest
import io.swagger.annotations.ApiImplicitParam
import io.swagger.annotations.ApiOperation
import java.util.UUID
import javax.validation.Valid
import org.springframework.http.HttpStatus
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/v2/users")
class V2UserController(
    private val findUserByEmailInteractor: FindUserByEmailInteractor,
    private val findAllUsersInteractor: FindAllUsersInteractor,
    private val resetUserPasswordInteractor: ResetUserPasswordInteractor,
    private val createUserInteractor: CreateUserInteractor,
    private val changeUserPasswordInteractor: ChangeUserPasswordInteractor,
    private val patchUserInteractor: PatchUserInteractor
) {

    @ApiOperation(value = "Find user by email")
    @GetMapping("/{email:.+}")
    @ResponseStatus(HttpStatus.OK)
    fun findByEmail(@PathVariable email: String): UserResponse {
        return findUserByEmailInteractor.execute(email)
    }

    @ApiOperation(value = "Find all users")
    @GetMapping
    fun findAll(
        @RequestParam("name", required = false) name: String?,
        @RequestParam("email", required = false) email: String?,
        pageable: PageRequest
    ): ResourcePageResponse<UserResponse> {
        return this.findAllUsersInteractor.execute(name, email, pageable)
    }

    @ApiOperation(value = "Reset password")
    @PutMapping("/{id}/reset-password")
    @ResponseStatus(HttpStatus.OK)
    fun resetPassword(
        @RequestHeader(value = "Authorization") authorization: String,
        @PathVariable id: UUID
    ) = resetUserPasswordInteractor.execute(authorization, id)

    @ApiOperation(value = "Create user")
    @ApiImplicitParam(
        name = "createUserRequest",
        value = "Create User",
        required = true,
        dataType = "CreateUserRequest"
    )
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    fun create(@Valid @RequestBody createUserRequest: CreateUserRequest, @RequestHeader(value = "Authorization") authorization: String): UserResponse {
        return this.createUserInteractor.execute(createUserRequest, authorization)
    }

    @ApiOperation(value = "Update user")
    @ApiImplicitParam(
        name = "patchUserRequest",
        value = "Patch User",
        required = true,
        dataType = "PatchUserRequest"
    )
    @PatchMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    fun patchUser(
        @PathVariable id: UUID,
        @Valid @RequestBody patchUserRequest: PatchUserRequest,
        @RequestHeader(value = "Authorization") authorization: String
    ): UserResponse {
        return this.patchUserInteractor.execute(id, patchUserRequest, authorization)
    }

    @ApiOperation(value = "Change users' password")
    @PutMapping("/password")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    fun changePassword(
        @RequestHeader(value = "Authorization") authorization: String,
        @RequestBody @Valid request: ChangeUserPasswordRequest
    ) {
        this.changeUserPasswordInteractor.execute(authorization, request)
    }
}
