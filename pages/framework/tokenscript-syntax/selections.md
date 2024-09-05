# Selections

A selection defines conditions that filter origin tokens for the TokenScript and are used to control the availability of cards.
These conditions use attribute values as input, just like transactions and other attributes.

## Defining a selection

As you can see, defining `ts:selection` is pretty simple:
```xml
<ts:selection name="adopted" filter="level>0">
	<ts:label>
		<ts:string xml:lang="en">Cat already adopted</ts:string>
	</ts:label>
</ts:selection>
```

Just like a lot of tokenscript.xml elements, there is a label included within that can be displayed to the user.
To use this filter to disable cards, reference this selection name in the `excude` attribute of `ts:card` as outlined [here](./cards).

## Filter syntax

The filter syntax uses a lexer & parser model that supports complex conditions.

### Simple conditions

You can specify an attribute name on the left hand side of the condition, with a static value on the right:

- ```level>0```
- ```canLevelUp=FALSE```

We can then use this selection to disable the card for tokens that are greater than level 0

```xml
<ts:card type="action" name="levelUp" origins="ReallyCoolToken" exclude="adopted">
	<!-- Other card elements omitted -->
</ts:card>
```

### Available operators

#### Comparison
- **=** Equals
- **<** Less than
- **>** Greater than
- **<=** Less than or equal
- **>=** Greater than or equal

#### Logical
- **&** And
- **|** Or
- **!** Not

### Right-hand-side values

Attribute values can also be specified on the right hand side by enclosing the attributes like so: `${tokenId}`.
In this way we can compare two attribute values to filter tokens:

```text
wallet=${ownerAddress}
```

We can even combine an RHS attribute with some static value:

```text
label=prefix-${ownerAddress}-suffix
```

### Complex conditions

Complex condition can be achieved through the use of brackets and logical operators:

Both conditions must be true (AND):
```text
&(level>0)(level<10)
```

At least one condition must be true (OR):
```text
|(level<10)(level>20)
```

Both conditions must be false (NOT):

```text
!(level=0)(level=10)
```

Multiple conditions can be grouped using brackets:

```text
&(!(level=0)(level=10))(wallet=${ownerAddress})
```
