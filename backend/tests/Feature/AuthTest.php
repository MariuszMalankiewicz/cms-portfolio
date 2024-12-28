<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Laravel\Sanctum\Sanctum;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AuthTest extends TestCase
{
    use RefreshDatabase;
    public function test_login_requires_email_and_password(): void
    {
        $response = $this->postJson(route('auth.login'), []);

        $response->assertUnprocessable();

        $response->assertJsonValidationErrors(['email', 'password']);
    }

    public function test_user_can_login_with_correct_credentials()
    {
        $user = User::factory()->create([
            'email' => 'test@example.com',
            'password' => bcrypt('password'),
        ]);

        $response = $this->postJson(route('auth.login'), [
            'email' => 'test@example.com',
            'password' => 'password',
        ]);

        $response->assertOk();
        $this->assertAuthenticatedAs($user);
    }

    public function test_user_cannot_login_with_incorrect_credentials()
    {
        $user = User::factory()->create([
            'email' => 'test@example.com',
            'password' => bcrypt('password'),
        ]);

        $response = $this->postJson(route('auth.login'), [
            'email' => 'test1@example.com',
            'password' => 'password1234',
        ]);

        $response->assertUnauthorized();
        $response->assertJson(['message' => 'Nie poprawne dane']);
    }

    public function test_authenticated_user_can_logout()
    {
        $user = User::factory()->create();
        Sanctum::actingAs($user);

        $response = $this->postJson(route('auth.logout'));

        $response->assertStatus(200);
        $response->assertJson(['message' => 'Zostałeś wylogowany']);

        $this->assertDatabaseMissing('personal_access_tokens', [
            'tokenable_id' => $user->id,
            'tokenable_type' => get_class($user),
        ]);
    }

    public function test_unauthenticated_user_cannot_logout()
    {
        $response = $this->postJson(route('auth.logout'));

        $response->assertStatus(401);
        $response->assertJsonStructure(['message']);
    }
}
