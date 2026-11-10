# Recovery practice

Run the sample with `node hello.js` or `node hello.js VolAxe`.

## Restore a deleted file

If deletion has not been committed:

```sh
git restore --source=HEAD --staged --worktree -- hello.js
```

If deletion was committed, find a commit containing the file and restore it:

```sh
git log --all -- hello.js
git restore --source=<commit-containing-file> -- hello.js
git add hello.js
git commit -m "Restore hello.js"
git push
```

## Restore a deleted GitHub repository

No code configuration is required. GitHub supports restoring eligible repositories
within 90 days. Open personal Settings > Repositories > Deleted repositories,
then choose Restore. It can take up to an hour for a deleted repository to appear.
Fork network restrictions and other limitations apply.

Documentation: https://docs.github.com/en/repositories/creating-and-managing-repositories/restoring-a-deleted-repository

Keep a separate backup if recovery matters. A local clone preserves Git history,
but does not back up all GitHub metadata such as issues or repository settings.

## Delete after restoring

Delete the restored repository again through its Settings > General > Danger Zone.
GitHub may still offer recovery during its retention window; this is not an
immediate purge of all stored copies. There is no repository code setting that
disables GitHub recovery. Copies in clones, forks and backups are separate.
For sensitive data, revoke exposed credentials immediately and consult GitHub Support.
