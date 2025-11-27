# test-semantic-release
Test semantic-release with different branching configurations

## Test 1 - maintenance branch and main branch

[26 nov 2025]

Created a `1.x` branch where maintenance patches should go to.

- If `main` was still in 1.x version, then trying to release from `1.x` branch would fail
    - [Commit reference](https://github.com/OS-pedrogustavobilro/test-semantic-release/commit/f851b03ba7f344158a9b56cbd55a2ddd8039cc58)
    - [GitHub Actions failure](https://github.com/OS-pedrogustavobilro/test-semantic-release/actions/runs/19701487111/job/56438625319)
    - Basically this is the [issue described here](https://github.com/semantic-release/semantic-release/issues/1487).
- After `main` becomes 2.x version, now I can release from `1.x` branch.
    - [Commit reference on main](https://github.com/OS-pedrogustavobilro/test-semantic-release/commit/8e2efc1fca523c5663f43ed883620bd0033cc8d2)
    - [Commit reference on 1.x](https://github.com/OS-pedrogustavobilro/test-semantic-release/commit/7b71ab6348fb38a7219b10b42b282b4065557a83)
    - [GitHub Action success for 1.x](https://github.com/OS-pedrogustavobilro/test-semantic-release/actions/runs/19702533161/job/56442005736)

## Test 2 - main branch for `alpha/beta/rc`

TODO