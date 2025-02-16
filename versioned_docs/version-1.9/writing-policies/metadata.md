---
sidebar_label: "Policy metadata"
title: "Policy metadata"
---

# Policy metadata

The Kubewarden metadata file, `metadata.yaml`, serves as a vital configuration
file that contains important information and settings related to the policies
used within Kubewarden. This documentation provides an overview of the
purpose and usage of the metadata file.

The policy `metadata.yaml` file contains defaults for the policy, in addition
to metadata such as author and description, set by the policy author. The file
is used by the `kwctl annonate` command to, as the name suggests, annotates the
`.wasm` file containing the policy. Therefore, all the relevant information required to run
the policy will be available. More information about how to annotate the policy
can be found in the [Distributing Policies](../distributing-policies.md) guide.

When policy users want to use a policy, they generate a YAML manifest using
`kwctl scaffold`. This command reads the policy metadata embedded in the
shipped Wasm module, performs sanity checks, and returns a YAML manifest that
the author can use as-is or adapt to their needs.

As a policy author, you can adapt the `metadata.yaml` file provided during the
scaffolding of your policy.

See the following example of a `metadata.yaml`:

```yaml
rules:
  - apiGroups: [""]
    apiVersions: ["v1"]
    resources: ["pods"]
    operations: ["CREATE"]
mutating: false
contextAwareResources: []
executionMode: kubewarden-wapc
policyType: kubernetes
backgroundAudit: true
annotations:
  # artifacthub specific:
  io.artifacthub.displayName: Policy Name
  io.artifacthub.resources: Pod
  io.artifacthub.keywords: pod, cool policy, kubewarden
  io.kubewarden.policy.ociUrl: ghcr.io/myorg/my-policy
  # kubewarden specific:
  io.kubewarden.policy.title: My policy
  io.kubewarden.policy.description: Short description
  io.kubewarden.policy.author: myself
  io.kubewarden.policy.url: https://github.com/yourorg/my-policy
  io.kubewarden.policy.source: https://github.com/yourorg/my-policy
  io.kubewarden.policy.license: Apache-2.0
  # The next two annotations are used in the policy report generated by the
  # Audit scanner. Severity indicates policy check result criticality and
  # Category indicates policy category. See more here at docs.kubewarden.io
  io.kubewarden.policy.severity: medium
  io.kubewarden.policy.category: Resource validation
```

**1. Enabling Background Audit Checks:**

The metadata file includes a flag, `backgroundAudit`, that enables the
background audit checks for a specific policy. By default, this flag is set to
`true`.

There are some policies that, due to the way they work or to the type
of events they are interested about, should have this field set to `false`.
More information can be found inside of the
[audit scanner documentation](../explanations/audit-scanner#limitations),
respectively under the limitations section.

**2. Defining Kubernetes Resources policies can access:**

Within the metadata file, using the `contextAwareResources` field, users can
define which Kubernetes resources the policy is allowed to access. For example,
if the policy need access to `Namespace` resource. The policy author can define
the `contextAwareResources` as:

```yaml
[...]
contextAwareResources:
  - apiVersion: v1 kind: Namespace
[...]
```

**3. Specifying Policy as Mutating or Non-Mutating:**

The metadata file contains a flag, `mutating`, that allows users to designate
a policy as either mutating or non-mutating. A mutating
policy modifies the incoming requests or the resources being managed. A
non-mutating one observes and enforces restrictions without making any
changes. This distinction is crucial in determining how policies interact with
the Kubernetes resources and their impact on the cluster.

**4. Specify Policy Type: Kubernetes or Raw**

The metadata file contains a flag, `policyType`, that allows users to mark
a policy as either `kubernetes` or `raw`. A Kubernetes policy is a policy that
validates Kubernetes resources. A Raw policy is a policy that validates
arbitrary JSON documents.
By default, if not specified by the user, this field is set to `kubernetes`
when annotating a policy.
Refer to the [Raw Policies](../howtos/raw-policies.md) section for more information.

**5. Defining Resource Type Targets:**

The metadata file provides users with the ability to define the rules within
the `rules` field, which determine the resource types to which the policy
applies. This feature empowers users to exercise precise control over policy
enforcement, guaranteeing that policies are exclusively applied to the intended
resource types. With this fine-grained control, users can ensure that policies
are targeted accurately, aligning with their specific requirements and avoiding
any unintended application to unrelated resource types.

---
